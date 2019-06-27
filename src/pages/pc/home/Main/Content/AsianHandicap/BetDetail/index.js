import React, { PureComponent } from 'react';
import styles from './betDetail.scss';
import { connect } from 'dva';
import Slide from '../../../../../../../components/slideAnimate/index';

@connect(({ oddsList, loading }) => ({
  oddsList,
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
                           onClick={() => this.showTabs(index)}>{val.name}</div>
                    ))
                  }
                </div>
                {
                  round.length > 1 ? '' : ''
                }
                {
                  round.map((val, index) => (
                      <ul className={styles.list}
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
                  ))
                }
              </div>
          </div>
        </div>
    );
  }
}

export default betDetail;
