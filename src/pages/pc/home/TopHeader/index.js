import React, { PureComponent } from 'react';
import Link from 'umi/link';
import {Icon} from 'antd'
import styles from './index.scss';


export default class TopHeader extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  render() {

    return (
      <header className={styles.header}>
        <div className={styles['header-wrapper']}>
          <a
          className={styles.logo}>
            亚冠电竞
         </a>
          <div className={styles['nav-item-box']} >
            <a className={styles['nav-item']} >
              <Icon className={styles.iconfont} type="user" />
            <span>用户：</span>
            b8cp_mako321
          </a>
            <a className={styles['nav-item']}>
              <Icon className={styles.iconfont} type="account-book" />
              <span
          >余额：</span>0.00
              <Icon className={styles.iconfont} type="sync" /></a>
            <a className={styles['nav-item']}>
            <Icon className={styles.iconfont} type="money-collect" />
            <span>账变记录</span></a> <a
             className={styles['nav-item']}>
            <Icon className={styles.iconfont} type="smile" />
            <span>游戏记录</span></a>
            <a className={styles['nav-item']}>
            <Icon className={styles.iconfont} type="tags" />
            <span>规则说明</span></a></div>
        </div>
      </header>
    );
  }
}
