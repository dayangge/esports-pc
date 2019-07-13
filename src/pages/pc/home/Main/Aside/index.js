import React, { PureComponent } from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import MaskLoading from '../../../../../components/PCMask';
import { gameBgColor } from 'esports-core/utils/util';

@connect(({ gameList, matchList, showMatchHandicapInfo, gameAndMatchRequestParams, loading }) => ({
  gameList,
  matchList,
  showMatchHandicapInfo,
  gameAndMatchRequestParams,
  gameLoading: loading.models.gameList,
}))
class Aside extends PureComponent {
  state = {

  };

  fetchGameList = (id,isActive) => {
    const { dispatch,gameAndMatchRequestParams } = this.props;
    const { matchType} =  gameAndMatchRequestParams;
    dispatch({
      type: 'showMatchHandicapInfo/changeMatchHandicapIndex',
      payload: -1,
    });
    dispatch({
      type: 'gameAndMatchRequestParams/modifyGameType',
      payload: { game_id: id }
    });
    if(matchType === '4'){
      dispatch({
        type: 'matchResult/fetchMatchResult',
        payload: { game_id: id }
      });
    }else {
      dispatch({
        type: 'matchList/fetchMatchList',
        payload: { game_id: id }
      });
    }
  };


  render() {
    const { gameAndMatchRequestParams } = this.props;
    const {ids ,list } = this.props;
    const { game_id} =  gameAndMatchRequestParams;
    return (
      <div className={styles['asize-scroll-wrapper']}>
        <div className={`${styles['aside-left']} f1`}>
          <aside id="category-list">
            {
              ids.length > 0 ? (
                <ul className={styles['category-list']}>
                  <li className={ game_id === '' ?(`${styles['category-item']} ${styles.active}`) : styles['category-item'] }
                      key='all' onClick={() => this.fetchGameList('', '')}>
                    <div className={styles['game-logo']}>
                      A
                    </div>
                    <span className={styles.name}>
                      所有游戏
                    </span>
                    <span className={styles.num}>
                           100
                    </span>
                  </li>
                  {
                    ids.map((val)=>(
                      <li className={ game_id === val ?(`${styles['category-item']} ${styles.active}`) : styles['category-item'] }
                          key={list[val].game_id} onClick={() => this.fetchGameList(list[val].game_id, val)}>
                        <img alt=''
                             src={gameBgColor[list[val].name_code].logo}
                             className={styles['game-logo']} />
                        <span
                          className={styles.name}>{list[val].name_cn}
                         </span>
                        <span className={styles.num}>
                           {list[val].match_count}
                         </span>
                      </li>
                    ))
                  }
                </ul>
              ): <MaskLoading />
            }
          </aside>
        </div>
      </div>
      );
    }
  }

export default Aside
