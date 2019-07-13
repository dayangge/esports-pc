import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
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

  componentDidMount () {
    const { dispatch, location } = this.props;
    let token = '';
    if(SessionStorage.get('token') !== undefined && SessionStorage.get('token') !== null  ){
      token = SessionStorage.get('token');
      this.setState({
        isLogin: true
      })
    }else{
      token = location.query.token;
      dispatch({
        type: 'login/login',
        payload: {token},
        callback: (res) => {
          if(res.code === 200 ){
            jwtDecode(res.token);
            SessionStorage.add('token',res.token);
            this.setState({
              isLogin: true
            })
          }
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
