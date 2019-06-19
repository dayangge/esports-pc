import React, { PureComponent } from 'react';
import { Icon, } from 'antd';
import styles from './index.scss';
import { connect } from 'dva';
import BetDetail from './BetDetail/index';
import Fade from '../../../../../../components/fadeAninate';
import moment from 'moment';

@connect(({ showMatchHandicapInfo, matchHandicap,oddsList, loading }) => ({
  showMatchHandicapInfo,
  matchHandicap,
  oddsList,
  loading: loading.models.matchHandicap,
}))
class MatchInfoLine extends PureComponent {
  state = {
    isShow: false
  };

  showBetDetail = (index) => {
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
      payload: index
    })
  };

  render() {
    const { data,
      eventLineIndex,
      showMatchHandicapInfo: { isShowNum },
      matchHandicap: {matchHandicap},
      oddsList: {oddsList},
      loading
    } = this.props;
    const handicapIds = data.Bet[0].Items.ids;
    return (
      <li className={styles['match-item']}>
        <div className={styles['match-box']}>
          <div className={styles['match-box']}>
            <div className={styles['game-info']}>
              <img
                src={data.CateLogo}
                className={styles['game-logo']}
              />
              {
                data.IsVideo ? (<a className={styles.live}>
                  <Icon type="play-circle" className={styles.liveicon} />
                </a>) : ''
              }
              <div className={styles.info}>
                <span className="time">
                  {
                    moment(data.StartAt).format('YYYY-MM-DD')
                  }
                  <em className={styles.time}>
                    {
                      moment(data.StartAt).format('HH:mm')
                    }
                  </em>
                </span>
                <span
                  className={styles.name}>{data.League}
                </span>
                <span title={ data.Title } className={`${styles.team} txt-ellipsis`}>
                  { data.Title }
                </span>
              </div>
            </div>
            {
              handicapIds.length === 2 ? (
                <div  className={styles.vs}>
                  <div  className={styles.player} >
                    <span title={data.Player[0].Name} className={styles['player-name']}>{data.Player[0].Name}</span>
                      <img
                        src={data.Player[0].Logo}
                        className={styles['player-img']}
                      />
                      <div className={styles.bet} >
                        {
                          oddsList[handicapIds[0]] ? (
                            oddsList[handicapIds[0]].Odds
                          ) : ''
                        }
                        {
                          oddsList[handicapIds[0]] && oddsList[handicapIds[0]].increase && oddsList[handicapIds[0]].increase === 1? (
                            <span className={styles.increase}>
                              <Icon type="caret-up" />
                            </span>
                          ) : ''
                        }
                        {
                          oddsList[handicapIds[0]] && oddsList[handicapIds[0]].increase && oddsList[handicapIds[0]].increase === -1? (
                            <span className={styles.reduce}>
                              <Icon type="caret-down" />
                            </span>
                          ) : ''
                        }
                      </div>

                  </div>
                  <span  className={styles['txt-vs']}>VS</span>
                  <div  className={styles.player} style={{textAlign: 'left',marginLeft:'5px'}}>
                  <span className={styles.bet} >
                    {
                      oddsList[handicapIds[1]] ? (
                        oddsList[handicapIds[1]].Odds
                      ) : ''
                    }
                    {
                      oddsList[handicapIds[1]] && oddsList[handicapIds[1]].increase && oddsList[handicapIds[1]].increase === 1? (
                        <span className={styles.increase}>
                              <Icon type="caret-up" />
                            </span>
                      ) : ''
                    }
                    {
                      oddsList[handicapIds[1]] && oddsList[handicapIds[1]].increase && oddsList[handicapIds[1]].increase === -1? (
                        <span className={styles.reduce}>
                              <Icon type="caret-down" />
                            </span>
                      ) : ''
                    }
                  </span>
                    <img
                      src={data.Player[1].Logo}
                      className={styles['player-img']}
                    />
                    <span title={data.Player[1].Name} className={`${styles['player-name']} tal`}>
                      {
                        data.Player[1].Name
                      }
                    </span>
                  </div>
                </div>
              ) :
                (
                <div  className={styles.vs}>
                  <div  className={styles.player} >
                    <span title={data.Player[0].Name}  className={styles['player-name']}>{data.Player[0].Name}</span>
                    <img
                      src={data.Player[0].Logo}
                      className={styles['player-img']} />
                    <span className={styles.bet}>
                  {data.Player[0].Score}
                  </span>
                  </div>
                  <span  className={styles['txt-vs']}>VS</span>
                  <div  className={styles.player} style={{textAlign: 'left',marginLeft:'5px'}}>
                <span className={styles.bet} >
                  {
                    data.Player[1].Score
                  }
                </span>
                    <img
                      src={data.Player[1].Logo}
                      className={styles['player-img']}
                    />
                    <span title={data.Player[0].Name} className={`${styles['player-name']} tal`}>
                  {
                    data.Player[1].Name
                  }
                </span>
                  </div>
                </div>
              )
            }
            <div className={styles['match-options']}>
              <div className={styles['btn-guess']} onClick={this.showBetDetail.bind(null,eventLineIndex)}>+{data.BetCount}</div>
              <div className={styles['live-icon']} />
            </div>
          </div>
        </div>
        <div>
          {
            isShowNum === eventLineIndex ? (
              loading === undefined || loading ? (<div className={styles.loadingBox}><span className={styles.name}>正在加载中</span></div>): (
                <Fade in={!loading} >
                  <BetDetail  matchHandicapData={matchHandicap}  />
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
