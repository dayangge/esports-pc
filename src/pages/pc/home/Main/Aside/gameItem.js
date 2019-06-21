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
class Aside extends PureComponent {
  state = {
  };

  fetchGameList = (id) => {
    const { dispatch,gameAndMatchRequestParams } = this.props;
    const { matchType} =  gameAndMatchRequestParams;
    if(matchType === '4'){
      dispatch({
        type: 'matchResult/fetchMatchResult',
        payload: { gameID:id }
      });
    }else {
      dispatch({
        type: 'gameAndMatchRequestParams/modifyGameType',
        payload: { gameID: id }
      });
      dispatch({
        type: 'matchList/fetchMatchList',
        payload: { gameID: id, matchType }
      });
    }
  };

  render() {
    const { data,gameAndMatchRequestParams} = this.props;
    const { gameID} =  gameAndMatchRequestParams;
    return (
      <li className={gameID === data.ID?(`${styles['category-item']} ${styles.active}`) : styles['category-item'] } key={data.ID} onClick={() => this.fetchGameList(data.ID)}>
        <img alt=''
             src={data.Cover}
             className={styles['game-logo']} />
        <span
          className={styles.name}>{data.Name}
        </span>
        <span className={styles.num}>
          {data.Count}
          <Icon className={styles['icon-arrow']} type="right" />
          </span>
      </li>
    );
  }
}

export default Aside;
