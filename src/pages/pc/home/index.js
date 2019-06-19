import React, { PureComponent } from 'react';
import TopHeader from './TopHeader/index'
import Announcement from './Announcement/index'
import Main from './Main/index'
import BettingSection from './BettingSection/index'
import styles from './index.scss'

class HomePage extends PureComponent {

  render() {
    return (
      <div className={styles.container}>
        <TopHeader />
        <Announcement />
        <Main />
        <BettingSection />
      </div>

    )
  }
}

export default HomePage
