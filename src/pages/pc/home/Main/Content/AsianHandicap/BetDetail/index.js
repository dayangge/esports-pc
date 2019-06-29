import React, { PureComponent } from 'react';
import styles from './betDetail.scss';
import { connect } from 'dva';
import Slide from '../../../../../../../components/slideAnimate/index';
import { Icon } from 'antd';

@connect(({ oddsList,matchDB, loading }) => ({
  oddsList,
  matchDB,
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
    } = this.props;
    const { list , round } = matchHandicapData;
    return (
        <div className={styles.bet} >
          <div>
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
                  round.length > 1 ? '' : ''
                }
                {
                  round.map((val, index) => (
                    val.id === '0' ? (
                        <ul className={styles.list}
                            style={isShowNum === index ? { display: 'block' } : { display: 'none' }}
                            key={val.id}
                        >
                          {
                            list[val.id].map((item) => (
                              <li className={styles['allRound-box']} key={ item.handicaps_id } >
                                <div className={styles.allRound}>
                                <div className={styles['home-name']}>
                                  <img  src={matchDB[matchID].host_player.logo} alt='logo'/>
                                  {item.handicap_items[0].handicaps_name}
                                </div>
                                  <div className={styles['home-odds']}>
                                    {
                                      oddsList[item.handicap_items[0].handicap_items_id] &&
                                      oddsList[item.handicap_items[0].handicap_items_id].increase &&
                                      oddsList[item.handicap_items[0].handicap_items_id].increase === 1 ? (
                                        <span className={styles.increase}>
                                        <Icon type="caret-up"/>
                                      </span>
                                      ) : ''
                                    }
                                    <button>
                                      {oddsList[item.handicap_items[0].handicap_items_id].odds}
                                    </button>
                                    {
                                      oddsList[item.handicap_items[0].handicap_items_id] &&
                                      oddsList[item.handicap_items[0].handicap_items_id].increase &&
                                      oddsList[item.handicap_items[0].handicap_items_id].increase === -1 ? (
                                        <span className={styles.reduce}>
                                        <Icon type="caret-down"/>
                                      </span>
                                      ) : ''
                                    }
                                  </div>
                                  <div className={styles['handicap-name']} >
                                   { item.handicaps_name }
                                  </div>
                                  <div className={styles['guest-odds']} >
                                    {
                                      oddsList[item.handicap_items[1].handicap_items_id] &&
                                      oddsList[item.handicap_items[1].handicap_items_id].increase &&
                                      oddsList[item.handicap_items[1].handicap_items_id].increase === 1 ? (
                                        <span className={styles.increase}>
                                          <Icon type="caret-up"/>
                                      </span>
                                      ) : ''
                                    }
                                    <button>
                                      {oddsList[item.handicap_items[1].handicap_items_id].odds}
                                    </button>
                                    {
                                      oddsList[item.handicap_items[1].handicap_items_id] &&
                                      oddsList[item.handicap_items[1].handicap_items_id].increase &&
                                      oddsList[item.handicap_items[1].handicap_items_id].increase === -1 ? (
                                        <span className={styles.reduce}>
                                        <Icon type="caret-down"/>
                                      </span>
                                      ) : ''
                                    }
                                  </div>
                                  <div className={styles['guest-name']}>
                                    <img  src={matchDB[matchID].guest_player.logo} alt='logo'/>
                                    {item.handicap_items[1].handicaps_name}
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
                          <li className={styles.item} key={ item.handicaps_id } >
                            <table className={styles['table-item']}>
                              <tbody>
                              <tr>
                                <td className={styles['bet-name']}>
                                  { item.handicaps_name}
                                </td>
                                <td>
                                  {
                                    item.handicap_items.map((v) => (
                                      <div className={styles['pankou-row']} key={v.handicap_items_id}>
                                          <span className={styles['pankou-name'] + 'txt-ellipsis'}>
                                            { v.handicaps_name}
                                          </span>
                                        <span className={styles['pankou-result']}>
                                              {oddsList[v.handicap_items_id].odds}
                                          </span>
                                      </div>
                                    ))
                                  }
                                </td>
                              </tr>
                              </tbody>
                            </table>
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
