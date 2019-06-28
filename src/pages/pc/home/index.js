import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
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
    isLogin: false
  };

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/login',
      payload: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJmcm9udGVuZCIsImV4cCI6MTU2MTcyNzc4NSwianRpIjoiZDMwNWExZWItNzU4Mi00YmM3LWExM2QtNzdjYzMxOGFhM2U4IiwiaWF0IjoxNTYxNzI0MTg1LCJpc3MiOiJnYXRld2F5Iiwic3ViIjoicmVkaXJlY3QifQ.AWdHO_8PID6J7moyzUErYN4EZy3Fnfp6qyrZkCTRXG0'},
      callback: (res) => {
       /* SessionStorage.add('token',res.token);*/
        console.log(res);
        this.setState({
          isLogin: true
        })

      }
    });
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
