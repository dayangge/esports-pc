import React, { PureComponent, Fragment } from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';
import Aside from './Aside/index';
import TopAside from './TopAside';
import Content from './Content/index';

@connect(({ gameList,gameAndMatchRequestParams, matchList, matchHandicap, updateOdds, loading }) => ({
  gameList,
  matchList,
  matchHandicap,
  updateOdds,
  gameAndMatchRequestParams,
  gameLoading: loading.models.gameList,
  eventLoading: loading.models.matchList,
  handicapLoading: loading.models.matchHandicap,
}))
class Main extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  timer = null;
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'gameList/fetchGameList',
    });
    dispatch({
      type: 'oddsList/fetchOddsList',
    });

    this.timer = setInterval(() => {
      this.getOddsList();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getOddsList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'oddsList/fetchOddsList',
    });
  };



  render() {
    const {
      gameList: { gameList },
    } = this.props;
    const { ids, list } = gameList;
    return (
      <div className={styles['main-panel']}>
        <Aside ids={ids} list={list} />
        <TopAside ids={ids} list={list}/>
        <Content />
      </div>

    );
  }
}

export default Main;
