import React, { PureComponent } from 'react';
import Link from 'umi/link';
import {Icon} from 'antd'
import styles from './index.scss';
import Slide from '@/components/slideAnimate'


export default class TopHeader extends PureComponent {
  state = {
    maxWidth: undefined,
    slideIn: false
  };

  changeBetSectionPos = () => {
    const { slideIn } = this.state;
    this.setState({
      slideIn: !slideIn
    })
  };

  render() {
    const { slideIn } = this.state;
    return (
      <div className={styles.betting} style={slideIn ? { transform: 'translateX(0)'}:{transform: 'translateX(100%)'}}>
        <div className={styles.arrow} onClick={this.changeBetSectionPos}>
          <Icon className={styles.iconfont} type="right" />
        </div>
        <div className={styles.header}>
          <span>竞猜单</span>
          <Icon className={styles.iconfont} type="delete" />
        </div>
        <div className={styles.container}>
          <div className={styles['bet-box']}>
            <div className={styles['bet-content']}>
              <div className={styles['bet-list']}>
                <div className={styles['bet-item']}>
                  <div className={styles['bet-item-header']}>
                    <span className={styles['item-title']}>
                      [BO3]Dominus Esports VS Edward Gaming 比赛获胜
                    </span>
                  </div>
                  <div className={styles['bet-item-content']}>
                    <div className={styles.box}>
                      <div className={styles['text-row']}>
                        <span>EDG</span>
                        <span>投注额</span>
                        <span>收益</span>
                      </div>
                      <div className={styles['bet-box']}>
                        <span className={styles.odds}>2.10</span>
                        <span>x</span>
                        <div className={styles['bet-input']}>
                          <div className={styles.select}>
                            <input className={styles['input-sel']}/>
                          </div>
                        </div>
                        <div className={styles.result}>
                          <span>=</span>
                          <span className={styles.num}>￥21.03</span>
                          <Icon className={styles.del} type="close-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
