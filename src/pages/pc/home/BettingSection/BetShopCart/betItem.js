import React, { PureComponent,Fragment } from 'react';
import Link from 'umi/link';
import {Icon,Select} from 'antd'
import styles from '../index.scss';

const { Option } = Select
export default class TopHeader extends PureComponent {
  state = {
    slideIn: false
  };

  render() {
    return (
      <li className={styles['bet-item']}>
        <div className={styles['bet-item-header']}>
          <span className={styles.title}>
            [BO3]Dominus Esports VS Edward Gaming 比赛获胜
          </span>
        </div>
        <div className={styles['bet-item-content']}>
          <div className={styles.handicapInfo}>
            <span className={styles.handicap}>EDG</span>
            <span className={styles.betMoney}>投注额</span>
            <span className={styles.win}>收益</span>
          </div>
          <div className={styles.winInfo}>
            <span className={styles.odds}>2.10</span>
            <span>x</span>
            <div className={styles['bet-select']}>
              <Select className={styles['bet-select-input']} >
                <Option value='10'>10</Option>
                <Option value='50'>50</Option>
                <Option value='100'>100</Option>
                <Option value='1000'>1000</Option>
                <Option value='2010'>最大投注</Option>
              </Select>
            </div>
            <span>=</span>
            <span className={styles.money}>￥21.03</span>
            <Icon className={styles.del} type="close-circle" />
          </div>
        </div>
      </li>
    );
  }
}
