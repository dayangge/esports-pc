import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './index.scss';
import RunningAccount from './RunningAccountLog';
import GameLogTable from './GameLog';
import RuleDescription from './RuleDescription';

@connect(({ showGameLog}) => ({
  showGameLog,
}))
class TopHeader extends PureComponent {

  state = {
    runningAccountVisible: false,
    ruleDescriptionVisible: false,
  };

  showRunningAccountModal = () => {
    this.setState({
      runningAccountVisible: true,
    });
  };

  closeRunningAccountModal = () => {
    this.setState({
      runningAccountVisible: false,
    });
  };

  showGameLogModal = () => {
    const { dispatch } = this.props;
    dispatch({
      type:'showGameLog/toggleGameLog',
      payload: true
    })
  };

  showRuleDescriptionModal = () => {
    this.setState({
      ruleDescriptionVisible: true,
    });
  };

  closeRuleDescriptionModal= () => {
    this.setState({
      ruleDescriptionVisible: false,
    });
  };

  render() {

    const { runningAccountVisible, ruleDescriptionVisible } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles['header-wrapper']}>
          <a
            className={styles.logo}>
            亚冠电竞
          </a>
          <div className={styles['nav-item-box']}>
            <a className={styles['nav-item']}>
              <Icon className={styles.iconfont} type="user"/>
              <span>用户：</span>
              b8cp_mako321
            </a>
            <a className={styles['nav-item']}>
              <Icon className={styles.iconfont} type="account-book"/>
              <span>余额：</span>0.00
              <Icon className={styles.iconfont} type="sync"/>
            </a>
            <a className={styles['nav-item']} onClick={this.showRunningAccountModal}>
              <Icon className={styles.iconfont} type="money-collect"/>
              <span>账变记录</span>
            </a>
            <a className={styles['nav-item']} onClick={this.showGameLogModal}>
              <Icon className={styles.iconfont} type="smile"/>
              <span>游戏记录</span>
            </a>
            <a className={styles['nav-item']} onClick={this.showRuleDescriptionModal}>
              <Icon className={styles.iconfont} type="tags"/>
              <span>规则说明</span>
            </a>
          </div>
        </div>
        <RunningAccount
          runningAccountVisible={runningAccountVisible}
          closeRunningAccountModal={this.closeRunningAccountModal}
        />
        <GameLogTable />
        <RuleDescription
          ruleDescriptionVisible={ruleDescriptionVisible}
          closeRuleDescriptionModal={this.closeRuleDescriptionModal}
        />
      </header>
    );
  }
}

export default TopHeader;
