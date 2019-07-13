import React, { PureComponent } from 'react';
import styles from './resultDetail.scss';
import Slide from '../../../../../../components/slideAnimate/index';
import { roundName } from 'esports-core/utils/util';

class ResultDetail extends PureComponent {
  state = {
    show: false,
    isShowNum: 0,
  };
  render() {
    const {
      data,
    } = this.props;
    console.log(data);
    return (
      <div className={styles.resultBox}>
      {
        data === undefined ? 'loading' :(
          <ul className={styles.round}>
             {
               data.list.map((item, index) => (
                 <li className={styles.item} key={ data.round[index].id } >
                   <div className={styles['round-name']}>
                     { data.round[index].name }
                     </div>
                   <div>
                     {
                       item.map((v) => (
                         <div className={styles['detail-item']} key={v.handicaps_id}>
                           <span className={styles.name}>
                             { v.handicaps_name}
                           </span>
                           <span className={styles.result}>
                             { v.result}
                           </span>
                         </div>
                       ))
                     }
                     </div>
                 </li>
               ))
             }
          </ul>

        )
      }
      </div>
    );
  }
}

export default ResultDetail;
