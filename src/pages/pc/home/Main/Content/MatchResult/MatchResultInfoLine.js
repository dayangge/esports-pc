import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Icon, } from 'antd';
import styles from './index.scss';
import Fade from '../../../../../../components/fadeAninate';
import moment from 'moment';
import { gameBgColor } from 'esports-core/utils/util'
import ResultDetail from './ResultDetail'

@connect(({ matchResultDB }) => ({
  matchResultDB,
}))
class MatchInfoLine extends PureComponent {
  state = {
    isShow: false
  };

  showResultDetail = (matchID) => {
    const { dispatch} = this.props;
    dispatch({
      type: 'matchResultDB/fetchMatchResult',
      payload: { match_id: matchID }
    });
    this.setState({
      isShow: true
    })

  };

  closeResultDetail = () => {
    this.setState({
      isShow: false
    })
  };

  render() {
    const { data, matchResultDB: {matchResultDB}} = this.props;
    const { isShow } = this.state;
    return (
      <li className={styles['match-item']}>
        <div className={styles[`match-item-${gameBgColor[data.game_id]}`]}>
          <div className={styles['match-box']}>
            <div className={styles['game-info']}>
              <img
                src={data.CateLogo}
                className={styles['game-logo']}
              />
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
                  <div  className={styles.vs}>
                    <div  className={styles.player} >
                      <span title={data.HomeName} className={styles['player-name']}>{data.HomeName}</span>
                      <img
                        src={data.HomeLogo}
                        className={styles['player-img']}
                      />
                      <div className={styles.bet} >
                        {data.HomeScore}
                      </div>

                    </div>
                    <span  className={styles['txt-vs']}>:</span>
                    <div  className={styles.player} style={{textAlign: 'left',marginLeft:'5px'}}>
                  <span className={styles.bet} >
                       {data.AwayScore}
                  </span>
                      <img
                        src={data.AwayLogo}
                        className={styles['player-img']}
                      />
                      <span title={data.AwayName} className={`${styles['player-name']} tal`}>
                        {data.AwayName}
                    </span>
                    </div>
                  </div>
            <div className={styles['match-options']}>
              {
                isShow ? <div className={styles['btn-guess']} onClick={this.closeResultDetail}>-</div> :
                  <div className={styles['btn-guess']} onClick={() => this.showResultDetail(data.match_id)}>+</div>
              }

            </div>
          </div>
        </div>
        <div>
          {
            isShow ? <ResultDetail data={matchResultDB.list} /> : ''
          }
        </div>

      </li>

    );
  }
}
export default MatchInfoLine
