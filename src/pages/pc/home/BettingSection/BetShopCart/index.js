import React, { PureComponent,Fragment } from 'react';
import Link from 'umi/link';
import {Icon} from 'antd'
import BetItem from './betItem'
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
          <BetItem />
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
