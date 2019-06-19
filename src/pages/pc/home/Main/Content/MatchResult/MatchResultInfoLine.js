import React, { PureComponent } from 'react';
import { Icon, } from 'antd';
import styles from './index.scss';
import Fade from '../../../../../../components/fadeAninate';
import moment from 'moment';

class MatchInfoLine extends PureComponent {
  state = {
    isShow: false
  };

  showResultDetail = () => {

  };

  render() {
    const { data} = this.props;
    return (
      <li className={styles['match-item']}>
        <div className={styles['match-box']}>
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
              <div className={styles['btn-guess']} onClick={this.showResultDetail}>+</div>
            </div>
          </div>
        </div>
        <div>
       {/*   {
            isShowNum === eventLineIndex ? (
              loading === undefined || loading ? (<div className={styles.loadingBox}><span className={styles.name}>正在加载中</span></div>): (
                <Fade in={!loading} >
                  <BetDetail  matchHandicapData={matchHandicap}  />
                </Fade>
              )
            ) : ''

          }*/}
        </div>
      </li>

    );
  }
}
export default MatchInfoLine
