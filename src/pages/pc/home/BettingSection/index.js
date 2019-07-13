import React, { PureComponent } from 'react';
import {Icon} from 'antd'
import { connect } from 'dva';
import BetShopCart from './BetShopCart';
import RecentBets from './RecentBets';
import Fade from '../../../../components/fadeAninate'

import styles from './index.scss';
@connect(({ showGameLog}) => ({
  showGameLog,
}))
class BettingSection extends PureComponent {
  state = {
    isTabs: 'bet',
    slideIn: true
  };

  changeBetSectionPos = () => {
    const { slideIn } = this.state;
    this.setState({
      slideIn: !slideIn
    })
  };

  toggleTabs= (tab) => {
    this.setState({
      isTabs: tab
    })
  };

  showGameLog = () => {
    const { dispatch } = this.props;
    dispatch({
      type:'showGameLog/toggleGameLog',
      payload: true
    })
  };

  render() {
    const { slideIn,isTabs } = this.state;
    return (
      <div className={styles.betting} style={slideIn ? { transform: 'translateX(0)'}:{transform: 'translateX(100%)'}}>
        <div className={styles.arrow} onClick={this.changeBetSectionPos}>
         <Icon className={styles.iconfont} type="right" />
        </div>
        <div className={styles.header}>
          <span>竞猜单</span>
          {
            isTabs === 'bet'?<Icon className={styles.iconfont} type="delete" /> :
            <div className={styles.more} onClick={this.showGameLog}>查看更多</div>
          }
        </div>
        <div className={styles.container}>
          {
            isTabs === 'bet' ?
              <Fade in={isTabs === 'bet'} >
                <BetShopCart />
              </Fade>:
              <Fade in={isTabs === 'recent'} >
                <RecentBets />
              </Fade>
          }

        </div>
        <div className={styles.bottom}>
          <div
            className={isTabs === 'bet'? `${styles['bet-tab']} ${styles.active}` : styles['bet-tab']}
            onClick={() => this.toggleTabs('bet')}>投注单</div>
          <div
            className={isTabs === 'recent'? `${styles['recent-tab']} ${styles.active}` : styles['recent-tab']}
            onClick={() => this.toggleTabs('recent')} >近期投注</div>
        </div>
      </div>
    );
  }
}

export default BettingSection
