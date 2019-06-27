import React, { PureComponent } from 'react';
import styles from './index.scss';
import MatchInfoLine from './MatchInfoLine';
import LoadingMask from '../../../../../../components/PCMask'
import { connect } from 'dva';

class AsianHandicap extends PureComponent {

  render() {
    const { RoundData,toggleGameLoading } = this.props;
    const {list,ids} = RoundData;
    return (
      <div className={styles['match-wrapper']}>
        <ul className={styles['match-list']}>
          {
            !toggleGameLoading ?
             (ids.map((val,index) => (
              <MatchInfoLine data={list[val]} key={val} eventLineIndex={index} />
              ))
             ):
             (
               <LoadingMask />
             )
          }
        </ul>
      </div>
    );
   }
  }
export default AsianHandicap;
