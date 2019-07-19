import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import moment from 'moment';
import jwtDecode from 'jwt-decode'
import SessionStorage from 'esports-core/utils/sessionStorage';
import TopHeader from './TopHeader/index';
import Announcement from './Announcement/index';
import Main from './Main/index';
import BettingSection from './BettingSection/index';
import styles from './index.scss';
import Mask from '../../../components/PCMask';

@connect(({ login }) => ({
  login
}))
class HomePage extends PureComponent {
  state = {
    isLogin: true
  };
  timer = null;

  setRefreshToken = () => {
    const expire = SessionStorage.get('expire');
    const expireTimestamp = moment(expire).valueOf();
    const now = moment().valueOf();
    const setTime = (expireTimestamp - now + 1000 * 60 * 5) > 1000 * 60 *5 ? expireTimestamp - now + 1000 * 60 * 5 : 10000 ;
    if(this.timer !== null) {
      this.timer = setTimeout(this.refreshToken,
        setTime)
    }
  };

  refreshToken = () => {
    const { dispatch, } = this.props;
    const token = SessionStorage.get('token');
    dispatch({
      type: 'login/refreshToken',
      payload: {token},
      callback: (res) => {
        SessionStorage.add('token',res.token);
        SessionStorage.add('expire',res.expire);
        this.setRefreshToken()
      }
    });
  };

  componentDidMount () {
    const { dispatch, location } = this.props;
    if(SessionStorage.get('token') !== undefined && SessionStorage.get('token') !== null  ){
      this.setRefreshToken();
      this.setState({
        isLogin: true
      })
    }else{
      const token = location.query.token;
      dispatch({
        type: 'login/login',
        payload: {token},
        callback: (res) => {
          SessionStorage.add('token',res.token);
          SessionStorage.add('expire',res.expire);
          this.setRefreshToken();
          this.setState({
             isLogin: true
           })
        }
      });
    }
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className={styles.container}>
        {
          isLogin ? (
            <Fragment>
              <TopHeader />
              <Announcement />
              <Main />
              <BettingSection />
            </Fragment>
          ): (
            <Mask />
          )
        }

      </div>

    )
  }
}

export default withRouter(HomePage)
