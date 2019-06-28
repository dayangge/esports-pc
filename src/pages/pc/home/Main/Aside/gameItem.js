import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';

@connect(({ gameList,matchList,gameAndMatchRequestParams, loading }) => ({
  gameList,
  matchList,
  gameAndMatchRequestParams,
  gameLoading: loading.models.gameList,
}))
class GameItem extends PureComponent {
  state = {

  };

  fetchGameList = (id) => {
    const { dispatch,gameAndMatchRequestParams } = this.props;
    const { matchType} =  gameAndMatchRequestParams;
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
        payload: { game_id: id, matchType }
      });
    }
  };

  render() {
    const { data,gameAndMatchRequestParams } = this.props;
    const { game_id} =  gameAndMatchRequestParams;
    return (
      <li className={game_id === data.id?(`${styles['category-item']} ${styles.active}`) : styles['category-item'] }
          key={data.id} onClick={() => this.fetchGameList(data.id)}>
        <img alt=''
             src={data.logo}
             className={styles['game-logo']} />
        <span
          className={styles.name}>{data.name_cn}
        </span>
        <span className={styles.num}>
          {data.match_count}
          </span>
      </li>
    );
  }
}

export default GameItem;
