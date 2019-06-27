import React, { PureComponent,Fragment } from 'react';
import Link from 'umi/link';
import {Icon} from 'antd'
import styles from '../index.scss';


export default class TopHeader extends PureComponent {
  state = {
    slideIn: false
  };

  render() {
    return (
     <Fragment>
          <div className={styles['bet-box']}>
              <ul className={styles['bet-list']}>
                <li className={styles['bet-item']}>
                  <div className={styles['bet-item-header']}>
                    <Icon type="play-circle" className={styles.icon}/>
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
                          <input className={styles['bet-select-input']}/>
                        </div>
                        <span>=</span>
                        <span className={styles.money}>￥21.03</span>
                        <Icon className={styles.del} type="close-circle" />

                      </div>
                  </div>
                </li>
            </ul>
          </div>
          <div className={styles['bet-total']}>
            <div className={styles.calc}>
              <div className={styles.left}>总投注额:</div>
              <div className={styles.right}>总收益额:</div>
            </div>
            <div className={styles.button}>
              <button className={styles['button-submit']}>
                确定投注
              </button>
              <div className={styles.warning}>
                系统将自动接收较佳收益率
              </div>
            </div>
          </div>
     </Fragment>

    );
  }
}
