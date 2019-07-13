import React, { PureComponent } from 'react';
import styles from './index.scss';
import ResultDetailInfoLine from './MatchResultInfoLine';
import LoadingMask from '../../../../../../components/PCMask';
import { connect } from 'dva';
import MatchInfoLine from '../AsianHandicap/MatchInfoLine';

@connect(({ gameAndMatchRequestParams}) => ({
  gameAndMatchRequestParams
}))
class MatchResult extends PureComponent {

  state = {
    loading: false,
    matchID: -1
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.gameAndMatchRequestParams.game_id !== prevState.matchID) {
      return {matchID:nextProps.gameAndMatchRequestParams.game_id,
        loading: true
      }
    }
    if(nextProps.gameAndMatchRequestParams.game_id === prevState.matchID){
      return {
        loading: false
      }
    }
  }

  render() {
    const { resultData:{list}, toggleGameLoading } = this.props;
    const resultIDs = list.ids;
    const resultListInfo = list.list;
    const {loading} = this.state;
    const showLoadingMask = loading ?  toggleGameLoading : false;

    return (
      <div className={styles['match-wrapper']}>
        <ul className={styles['match-list']}>
          {
            showLoadingMask ?
              (
                <LoadingMask />
              ):
              (
                resultIDs.map((val) => (
                  <ResultDetailInfoLine data={resultListInfo[val]} key={val}  />
                ))
              )
          }
        </ul>
      </div>
    );
  }
}

export default MatchResult;
