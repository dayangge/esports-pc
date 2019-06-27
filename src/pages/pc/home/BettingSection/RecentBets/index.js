import React, { PureComponent, Fragment } from 'react';
import Link from 'umi/link';
import { Icon } from 'antd';
import styles from '../index.scss';
import Slide from '@/components/slideAnimate';

export default class TopHeader extends PureComponent {
  state = {
    slideIn: false,
  };

  changeBetSectionPos = () => {
    const { slideIn } = this.state;
    this.setState({
      slideIn: !slideIn,
    });
  };

  render() {
    return (
      <Fragment>
        <div className={styles['recent-box']}>
          <ul className={styles['recent-list']}>
            <li className={styles['recent-item']}>
              <div className={styles.header}>
                <span className={styles.title}>
                  [BO3]Dominus Esports VS Edward Gaming 比赛获胜
                </span>
                <span>
                  等待开奖
                </span>
              </div>
              <div className={styles.content}>
                <div className={styles['handicap-info']}>
                  <div>EDG-地图1-获胜者</div>
                  <div>投注34:.00</div>
                </div>
                <div className={styles['handicap-info']}>
                  <div>赔率：2.03</div>
                  <div>盈亏：0.00</div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </Fragment>

    );
  }
}
