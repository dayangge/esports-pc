import React, { PureComponent } from 'react';
import { Icon, } from 'antd';
import styles from './index.scss';
import { connect } from 'dva';
import BetDetail from './BetDetail/index';
import Fade from '../../../../../../components/fadeAninate';
import moment from 'moment';

const bgColor = {
  1: 'lol',
  2: 'dota2',
  3: 'csgo',
  4: 'pubg',
  5: 'ow',
  6: 'gok',
};

@connect(({ showMatchHandicapInfo, matchHandicap,oddsList, loading, gameDB }) => ({
  showMatchHandicapInfo,
  matchHandicap,
  oddsList,
  loading: loading.models.matchHandicap,
  gameDB,
}))
class MatchInfoLine extends PureComponent {
  state = {
    isShow: false
  };

  showBetDetail = (index,matchID) => {
    const { dispatch } = this.props;
    const { showMatchHandicapInfo:{isShowNum}} = this.props;
    if(isShowNum === index){
      return
    }
    dispatch({
      type: 'showMatchHandicapInfo/changeMatchHandicapIndex',
      payload: index
    });

    dispatch({
      type: 'matchHandicap/fetchMatchHandicap',
      payload: {match_id:matchID}
    })
  };

  render() {
    const { data,
      eventLineIndex,
      showMatchHandicapInfo: { isShowNum },
      matchHandicap: {matchHandicap},
      oddsList: {oddsList},
      gameDB:{gameDB},
      loading
    } = this.props;
    const { handicap_items } = data.main_handicap[0];
    return (
      <li className={styles[`match-item-${bgColor[data.game_id]}`]} >
        <div className={styles['match-box']}>
          <div className={styles['match-box']}>
            <div className={styles['game-info']}>
              {
                gameDB[data.game_id] ?
                <img
                  src={gameDB[data.game_id].logo}
                  className={styles['game-logo']}
                />: ''
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
                <span
                  className={styles.name}>{data.event_name}
                </span>
                <span title={data.match_name} className={`${styles.team} txt-ellipsis`}>
                  {data.match_name}
                </span>
              </div>
            </div>
          <div className={styles.vs} title={data.main_handicap.name}>
              <div className={styles.player}>
                <span title={data.host_player.name} className={styles['player-name']}>{data.host_player.name}</span>
                <img
                  src={data.host_player.logo}
                  className={styles['player-img']}
                />
                <div className={styles.bet}>
                  {
                    oddsList[handicap_items[0].id] ? (
                      oddsList[handicap_items[0].id].odds
                    ) : ''
                  }
                  {
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
                  }
                </div>
              </div>
              <span className={styles['txt-vs']}>VS</span>
              <div className={styles.player} style={{ textAlign: 'left', marginLeft: '5px' }}>
                  <span className={styles.bet}>
                    {
                      oddsList[handicap_items[1].id] ? (
                        oddsList[handicap_items[1].id].odds
                      ) : ''
                    }
                    {
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
                    }
                  </span>
                <img
                  src={data.guest_player.logo}
                  className={styles['player-img']}
                />
                <span title={data.guest_player.name} className={`${styles['player-name']} tal`}>
                   {
                     data.guest_player.name
                   }
                </span>
              </div>
            </div>
            <div className={styles['match-options']}>
              <div className={styles[`btn-guess-${bgColor[data.game_id]}`]}
                   onClick={() => this.showBetDetail( eventLineIndex,data.id)}>
                +{data.handicap_count}
                <span>盘口</span>
                </div>
            </div>
          </div>
        </div>
        <div>
          {
            isShowNum === eventLineIndex ? (
              loading === undefined || loading ?
                (<div className={styles.loadingBox}>
                  <span className={styles.name}>正在加载中</span>
                </div>): (
                <Fade in={!loading} >
                  <BetDetail matchHandicapData={matchHandicap} />
                </Fade>
              )
              ) : ''
          }
          </div>
      </li>
    );
  }
}
export default MatchInfoLine
