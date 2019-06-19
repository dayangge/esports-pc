import React, { PureComponent } from 'react';
import styles from './index.scss';
import ResultDetailInfoLine from './MatchResultInfoLine';
import LoadingMask from '../../../../../../components/PCMask'

export default class MatchResult extends PureComponent {

  render() {
    const { resultData:{list},toggleGameLoading } = this.props;
    const resultIDs = list.ids;
    const resultListInfo = list.list;

    return (
      <div className={styles['match-wrapper']}>
        {
          toggleGameLoading && list.length > 0 ? (
            <LoadingMask
              bg='rgba(255,255,255,.2)'
              loadingFontSize='20px'
              loadingIconSize='40px'
            />
          ): ''
        }
        <ul className={styles['match-list']}>
          {
            resultIDs.length > 0 ?
              (resultIDs.map((val) => (
                  <ResultDetailInfoLine data={resultListInfo[val]} key={val}  />
                ))
              ):
              (<LoadingMask />)
          }
        </ul>
      </div>
    );
  }
}
