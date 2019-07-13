import React, { PureComponent } from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import MatchInfoLine from './MatchInfoLine';
import LoadingMask from '../../../../../../components/PCMask'


@connect(({ gameAndMatchRequestParams}) => ({
  gameAndMatchRequestParams
}))
class AsianHandicap extends PureComponent {

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
    const { RoundData,toggleGameLoading, gameAndMatchRequestParams: {game_id} } = this.props;
    const {list,ids} = RoundData;
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
                ids.length === 0 ? <div className={styles['noData-box']}>暂无数据</div> :
                ids.map((val,index) => (
                  <MatchInfoLine data={list[val]} key={val} eventLineIndex={index} gameID={game_id} />
                ))
              )
          }
        </ul>
      </div>
    );
   }
  }
export default AsianHandicap;
