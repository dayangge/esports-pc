import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './index.scss';
import { gameBgColor } from 'esports-core/utils/util';
import { BORound } from 'esports-core/utils/util';
import { connect } from 'dva';
import BetDetail from './BetDetail/index';
import moment from 'moment';
import { getStorage } from 'esports-core/utils/localStoragePloyfill';

@connect(({ showMatchHandicapInfo, matchHandicapDB, oddsList, loading }) => ({
  showMatchHandicapInfo,
  matchHandicapDB,
  oddsList,
}))
class MatchInfoLine extends PureComponent {


  showBetDetail = (matchID) => {
    const { dispatch,data } = this.props;
    const { showMatchHandicapInfo: { isShowMatchID } } = this.props;
    if (isShowMatchID === data.match_id ) {
      return;
    }
    this.setState({
      isShow: true
    });
    dispatch({
      type: 'showMatchHandicapInfo/changeMatchHandicapIndex',
      payload: matchID,
    });

    dispatch({
      type: 'matchHandicap/fetchMatchHandicap',
      payload: { match_id: matchID },
    });
  };

  render() {
    const {
      data,
      showMatchHandicapInfo: { isShowMatchID },
      matchHandicapDB: { matchHandicapDB },
      oddsList: { oddsList },
    } = this.props;
    const gameDB = getStorage('gameDB');
    const nameCode = gameDB[data.game_id].name_code;
    return (
      <li className={styles[`match-item-${gameBgColor[nameCode].name}`]}>
        <div className={styles['match-box']}>
          <div className={styles['game-info']}>
            {
              gameBgColor[nameCode] ?
                <img
                  src={gameBgColor[nameCode].logo}
                  className={styles['game-logo']}
                /> : '1'
            }

            {
              data.on_air ? (<a className={styles.live}>
                <Icon type="play-circle" className={styles.liveicon}/>
              </a>) : ''
            }

            <div className={styles.info}>
                <span className="time">
                  {
                    moment(data.match_time).format('YYYY-MM-DD')
                  }
                  <em className={styles.time}>
                    {
                      moment(data.match_time).format('HH:mm')
                    }
                  </em>
                </span>
              <span title={data.match_name}
                    className={styles.name}>{data.event_name}
                    <span className={styles.bo}>
                    {data.bo_num !== 0 && `[${BORound[data.bo_num]}]`}
                    </span>
                </span>

            </div>
          </div>
          <div className={styles.vs}>
            <div className={styles['home-player']}>
              <span  className={styles['player-name']}>{data.host_player.name}</span>
              <img
                src={data.host_player.logo}
                className={styles['player-img']}
              />
              <div className={styles.bet} onClick={() => this.showBetDetail( data.match_id)}>
                { data.main_handicap
                && data.main_handicap.handicap_items
                && data.main_handicap.handicap_items[0]&&
                data.main_handicap.handicap_items[0].handicap_item_id
                && oddsList[data.main_handicap.handicap_items[0].handicap_item_id]
                  ? oddsList[data.main_handicap.handicap_items[0].handicap_item_id].odds.toString().substring(0,4) :''}
              {/*  {
                  oddsList[handicap_items[0].id] && oddsList[handicap_items[0].id].increase && oddsList[handicap_items[0].id].increase === 1 ? (
                    <span className={styles.increase}>
                              <Icon type="caret-up"/>
                            </span>
                  ) : ''
                }
                {
                  oddsList[handicap_items[0].id] && oddsList[handicap_items[0].id].increase && oddsList[handicap_items[0].id].increase === -1 ? (
                    <span className={styles.reduce}>
                              <Icon type="caret-down"/>
                            </span>
                  ) : ''
                }*/}
              </div>
            </div>
            <span className={styles['txt-vs']}>VS</span>
            <div className={styles['guest-player']}>
                <span className={styles.bet} onClick={() => this.showBetDetail( data.match_id)}>
                  {data.main_handicap
                  && data.main_handicap.handicap_items
                  &&data.main_handicap.handicap_items[1]&&
                  data.main_handicap.handicap_items[1].handicap_item_id
                  && oddsList[data.main_handicap.handicap_items[1].handicap_item_id]
                    ? oddsList[data.main_handicap.handicap_items[1].handicap_item_id].odds.toString().substring(0,4) :''}
                {/*    {
                      oddsList[handicap_items[1].id] && oddsList[handicap_items[1].id].increase && oddsList[handicap_items[1].id].increase === 1 ? (
                        <span className={styles.increase}>
                              <Icon type="caret-up"/>
                            </span>
                      ) : ''
                    }
                    {
                      oddsList[handicap_items[1].id] && oddsList[handicap_items[1].id].increase && oddsList[handicap_items[1].id].increase === -1 ? (
                        <span className={styles.reduce}>
                              <Icon type="caret-down"/>
                            </span>
                      ) : ''
                    }*/}
                  </span>
              <img
                src={data.guest_player.logo}
                className={styles['player-img']}
              />
              <span title={data.guest_player.name} className={`${styles['player-name']}`}>
                   {
                     data.guest_player.name
                   }
                </span>
            </div>
          </div>
          <div className={styles['match-options']}>
            <div className={styles[`btn-guess-${gameBgColor[gameDB[data.game_id].name_code].name}`]}
                 onClick={() => this.showBetDetail( data.match_id)}>
              +{data.handicap_count}
              <span>盘口</span>
            </div>
          </div>
        </div>
        <div>
          {
            isShowMatchID === data.match_id ? (
              matchHandicapDB[data.match_id] === undefined  ?
                (<div className={styles.loadingBox}>
                  <span className={styles.name}>正在加载中</span>
                </div>) : (
                  <div >
                    <BetDetail matchHandicapData={matchHandicapDB[data.match_id]} matchID={data.match_id} gameID={data.game_id}/>
                  </div>
                )
            ) : ''
          }
        </div>
      </li>
    );
  }
}

export default MatchInfoLine;
