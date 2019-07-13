import React, { PureComponent } from 'react';
import styles from './betDetail.scss';
import { connect } from 'dva';
import { gameBgColor } from 'esports-core/utils/util';
import { getStorage } from 'esports-core/utils/localStoragePloyfill';
import Slide from '../../../../../../../components/slideAnimate/index';
import { Icon } from 'antd';

@connect(({ oddsList,matchDB, gameDB, loading }) => ({
  oddsList,
  matchDB,
  gameDB,
  Loading: loading.models.matchHandicap,
}))
class betDetail extends PureComponent {
  state = {
    show: false,
    isShowNum: 0,
  };

  showTabs = (val) => {
    this.setState({
      isShowNum: val,
    });
  };

  renderOneRound() {
    const { matchHandicapData, } = this.props;
    const { list , round } = matchHandicapData;
  }

  renderMoreRound() {

  }

  render() {
    const { isShowNum } = this.state;
    const {
      matchHandicapData,
      oddsList: { oddsList },
      matchDB: {matchDB},
      matchID,
      gameID,
    } = this.props;
    const { list , round } = matchHandicapData;
    const gameDB = getStorage('gameDB');
    const nameCode = gameDB[gameID].name_code;
    return (
        <div className={styles.bet} >
          <div>
            <div className={styles.matchTeam}>
              <div className={styles.teamVs}>
                <div className={styles.home}> {matchDB[matchID].host_player.name}</div>
                <div className={styles.gameLogo}><img src={gameBgColor[nameCode].logo} /></div>
                <div className={styles.guest}> {matchDB[matchID].guest_player.name}</div>
              </div>

            </div>
              <div className={styles.round}>
                <div className={styles['round-tab']}>
                  {
                    round.map((val, index) => (
                      <div key={val.id}
                           className={isShowNum === index ? `${styles.item} ${styles.active}` : `${styles.item}`}
                           onClick={() => this.showTabs(index)}>
                        <span className={styles.text}>{val.name}</span></div>
                    ))
                  }
                </div>
                {
                  round.map((val, index) => (
                    val.id === 0 ? (
                        <ul className={styles.list}
                            style={isShowNum === index ? { display: 'block' } : { display: 'none' }}
                            key={val.id}
                        >
                          {
                            list[val.id].map((item) => (
                              <li className={styles['allRound-box']} key={ item.handicap_id } >
                                <div className={styles.allRound}>
                                <div className={styles['home-name']}>
                                  <img  src={matchDB[matchID].host_player.logo} alt='logo'/>
                                  {item.handicap_items[0].content}{item.handicap_items[1].offset ? `(${item.handicap_items[1].offset})`: ''}
                                </div>
                                  <div className={styles['home-odds']}>
                                    {
                                      oddsList[item.handicap_items[0].handicap_item_id] &&
                                      oddsList[item.handicap_items[0].handicap_item_id].increase &&
                                      oddsList[item.handicap_items[0].handicap_item_id].increase === 1 ? (
                                        <span className={styles.increase}>
                                        <Icon type="caret-up"/>
                                      </span>
                                      ) : ''
                                    }
                                    <button>
                                      {oddsList[item.handicap_items[0].handicap_item_id].odds}
                                    </button>
                                    {
                                      oddsList[item.handicap_items[0].handicap_item_id] &&
                                      oddsList[item.handicap_items[0].handicap_item_id].increase &&
                                      oddsList[item.handicap_items[0].handicap_item_id].increase === -1 ? (
                                        <span className={styles.reduce}>
                                        <Icon type="caret-down"/>
                                      </span>
                                      ) : ''
                                    }
                                  </div>
                                  <div className={styles['handicap-name']} >
                                   { item.handicap_name }
                                  </div>
                                  <div className={styles['guest-odds']} >
                                    {
                                      oddsList[item.handicap_items[1].handicap_item_id] &&
                                      oddsList[item.handicap_items[1].handicap_item_id].increase &&
                                      oddsList[item.handicap_items[1].handicap_item_id].increase === 1 ? (
                                        <span className={styles.increase}>
                                          <Icon type="caret-up"/>
                                      </span>
                                      ) : ''
                                    }
                                    <button>
                                      {oddsList[item.handicap_items[1].handicap_item_id].odds}
                                    </button>
                                    {
                                      oddsList[item.handicap_items[1].handicap_item_id] &&
                                      oddsList[item.handicap_items[1].handicap_item_id].increase &&
                                      oddsList[item.handicap_items[1].handicap_item_id].increase === -1 ? (
                                        <span className={styles.reduce}>
                                        <Icon type="caret-down"/>
                                      </span>
                                      ) : ''
                                    }
                                  </div>
                                  <div className={styles['guest-name']}>
                                    <img  src={matchDB[matchID].guest_player.logo} alt='logo'/>
                                    {item.handicap_items[1].content}{item.handicap_items[1].offset ? `(${item.handicap_items[1].offset})`: ''}
                                  </div>
                                </div>

                              </li>
                            ))
                          }
                        </ul>
                    ) :
                      ( <ul className={styles.list}
                            style={isShowNum === index ? { display: 'block' } : { display: 'none' }}
                            key={val.id}
                      >
                      {
                        list[val.id].map((item) => (
                          <li className={styles.item} key={ item.handicap_id } >
                            <div className={styles['table-item']}>
                                <div className={styles['bet-name']}>
                                  { item.handicap_name}
                                </div>
                                <div className={styles['bet-content']}>
                                  {
                                    item.handicap_items.map((v) => (
                                      <div className={styles['pankou-row']} key={v.handicap_item_id}>
                                          <span className={styles['pankou-name'] + 'txt-ellipsis'}>
                                           {v.content}{v.offset ? `(${v.offset})`: ''}
                                          </span>
                                        <span className={styles['pankou-result']} >
                                          {oddsList[v.handicap_item_id] ? oddsList[v.handicap_item_id].odds : ''}
                                          </span>
                                      </div>
                                    ))
                                  }
                                </div>
                              </div>
                          </li>
                        ))
                      }
                    </ul>
                      )
                  ))
                }
              </div>
          </div>
        </div>
    );
  }
}

export default betDetail;
