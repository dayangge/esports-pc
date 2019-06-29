import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import jwtDecode from 'jwt-decode'
import SessionStorage from 'esports-core/utils/sessionStorage';
import TopHeader from './TopHeader/index';
import Announcement from './Announcement/index';
import Main from './Main/index';
import BettingSection from './BettingSection/index';
import styles from './index.scss';
import Mask from '../../../components/PCMask'


@connect(({ login }) => ({
  login
}))
class HomePage extends PureComponent {

  state = {
    isLogin: true
  };

  componentDidMount () {
    const { dispatch } = this.props;
    const res = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjE3MjE4MTQsImp0aSI6Ijg5NjBiYmExLWM5MjYtNGE4Yy1hNDAwLWQxYjE0ZDgzZGMyOSIsIm9yaWdfaWF0IjoxNTYxNzE4MjE0fQ.Xy9Nlv-80RFsJoU3lAEpO5TYi5NL2cPUYjk8i9HQOKg')
    /*dispatch({
      type: 'login/login1',
      callback: (res) => {
        console.log(res)
      }})
    dispatch({
      type: 'login/login',
      payload: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJmcm9udGVuZCIsImV4cCI6MTU2MTcyNzc4NSwianRpIjoiZDMwNWExZWItNzU4Mi00YmM3LWExM2QtNzdjYzMxOGFhM2U4IiwiaWF0IjoxNTYxNzI0MTg1LCJpc3MiOiJnYXRld2F5Iiwic3ViIjoicmVkaXJlY3QifQ.AWdHO_8PID6J7moyzUErYN4EZy3Fnfp6qyrZkCTRXG0'},
      callback: (res) => {
        console.log(res);
        let tokenArr = res.data.split('.');
        tokenArr.map(() => {

        })
        this.setState({
          isLogin: true
        })
      }
    });*/
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

export default HomePage
