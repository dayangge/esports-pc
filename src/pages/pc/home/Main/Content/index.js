import React, { PureComponent } from 'react';
import { Tabs,Icon,Input } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';
import AsianHandicap from './AsianHandicap/index';
import MatchResult from './MatchResult';
import CountDown from '../../../../../components/CountDown';

const {TabPane} = Tabs;
const { Search } = Input;

@connect(({ matchList, matchResult, gameAndMatchRequestParams, loading }) => ({
  matchList,
  matchResult,
  gameAndMatchRequestParams,
  matchListLoading: loading.models.matchList,
  matchResultLoading:loading.models.matchResult
}))
class Content extends PureComponent {
  state = {
    showKey: 1
  };

  callback = (key) => {
    this.setState({
      showKey:key
    });
    this.fetchMatchList(key)
  };

  componentDidMount() {
    const { dispatch,gameAndMatchRequestParams } = this.props;
    const { game_id } =  gameAndMatchRequestParams;
    dispatch({
      type: 'matchList/fetchMatchList',
      payload: { game_id}
    });
  }

  fetchMatchList = (key) => {
    const { dispatch,gameAndMatchRequestParams } = this.props;
    const { game_id } =  gameAndMatchRequestParams;
    if(key === '4'){
      dispatch({
        type: 'gameAndMatchRequestParams/modifyMatchType',
        payload: { matchType: key }
      });
      dispatch({
        type: 'matchResult/fetchMatchResult',
        payload: { game_id }
      });
    }else {
      dispatch({
        type: 'gameAndMatchRequestParams/modifyMatchType',
        payload: { matchType: key }
      });
      dispatch({
        type: 'matchList/fetchMatchList',
        payload: { game_id}
      });
    }
  };

  render() {
    const {
      matchList: { matchList },
      matchResult: { matchResult },
      matchListLoading,
      matchResultLoading
    } = this.props;
    return (
      <div className={styles['aside-right']}>
        <div className={styles['match-container']}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="比赛盘" key="1" className={styles['panel-content']}>
              <AsianHandicap RoundData={matchList} toggleGameLoading={matchListLoading} />
            </TabPane>
            <TabPane tab="赛果" key="4" className={styles['panel-content']}>
              <MatchResult resultData={matchResult} toggleGameLoading={matchResultLoading} />
            </TabPane>
          </Tabs>
          <div className={styles['search-box']} >
            <Icon className={styles.countClock}  type="clock-circle" />
            <span className={styles.countdown}>
              <CountDown time='60' onEnd={this.fetchMatchList} />
              s</span>
           {/* <Search className={styles['search-input']} onSearch={value => console.log(value)} />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Content
