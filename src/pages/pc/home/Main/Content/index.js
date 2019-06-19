import React, { PureComponent } from 'react';
import { Tabs,Icon,Input } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';
import AsianHandicap from './AsianHandicap/index';
import MatchResult from './MatchResult';
import CountDown from '../../../../../components/CountDown';


const {TabPane} = Tabs;

@connect(({ matchList, matchResult, gameAndMatchRequestParams, loading }) => ({
  matchList,
  matchResult,
  gameAndMatchRequestParams,
  matchListLoading: loading.models.matchList,
  matchResultLoading:loading.models.matchResult
}))
class Content extends PureComponent {
  state = {
    maxWidth: undefined,
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
    const { gameID } =  gameAndMatchRequestParams;
    dispatch({
      type: 'matchList/fetchMatchList',
      payload: { gameID, matchType: 1 }
    });
  }


  fetchMatchList = (key) => {
    const { dispatch,gameAndMatchRequestParams } = this.props;
    const { gameID } =  gameAndMatchRequestParams;
    console.log(key);
    if(key === '4'){
      dispatch({
        type: 'matchResult/fetchMatchResult',
        payload: { gameID }
      });
    }else {
      dispatch({
        type: 'gameAndMatchRequestParams/modifyMatchType',
        payload: { matchType: key }
      });
      dispatch({
        type: 'matchList/fetchMatchList',
        payload: { gameID, matchType: key }
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
            <TabPane tab="早盘/滚盘" key="1" className={styles['panel-content']}>
              <AsianHandicap RoundData={matchList} toggleGameLoading={matchListLoading} />
            </TabPane>
            <TabPane tab="滚盘" key="2" className={styles['panel-content']}>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="特殊赛事" key="3" className={styles['panel-content']}>
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="赛果" key="4" className={styles['panel-content']}>
              <MatchResult resultData={matchResult} toggleGameLoading={matchResultLoading} />
            </TabPane>
          </Tabs>
          <div className={styles['search-box']}>
            <Icon  theme="twoTone" type="clock-circle" />
            <span className={styles.countdown}>
              <CountDown time='60' onEnd={this.fetchMatchList} />
              s</span>
            <Input className={styles['search-input']}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content
