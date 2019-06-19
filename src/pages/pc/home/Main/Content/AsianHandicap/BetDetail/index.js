import React, { PureComponent } from 'react';
import styles from './betDetail.scss';
import { connect } from 'dva';
import Slide from '../../../../../../../components/slideAnimate/index';

@connect(({ oddsList, loading }) => ({
  oddsList,
  Loading: loading.models.matchHandicap,
}))
class firstRound extends PureComponent {
  state = {
    show: false,
    isShowNum: 0,
  };

  showTabs = (val) => {
    this.setState({
      isShowNum: val,
    });
  };


  render() {
    const { isShowNum } = this.state;
    const {
      matchHandicapData,
      oddsList: { oddsList },
    } = this.props;
    console.log(this.props);
    const { data: { Round }, list } = matchHandicapData;
    const { ids } = list;
    const handicapList= list.list;
    return (
        <div className={styles.bet} >
          <div>
              <div className={styles.round}>
                <div className={styles['round-tab']}>
                  {
                    Round.map((val, index) => (
                      <div key={val.ID}
                           className={isShowNum === index ? `${styles.item} ${styles.active}` : `${styles.item}`}
                           onClick={() => this.showTabs(index)}>{val.Name}</div>
                    ))
                  }
                </div>
                {
                  Round.map((val, index) => (
                    <Slide come={isShowNum === index} clsName='slides' key={val.ID}>
                      <ul className={styles.list}
                          style={isShowNum === index ? { display: 'block' } : { display: 'none' }}
                          key={val.ID}
                      >
                        {
                          ids.map((item) => (
                            handicapList[item].Round === val.ID ? (
                              <li className={styles.item} key={handicapList[item].BetID}>
                                <table className={styles['table-item']}>
                                  <tbody>
                                  <tr>
                                    <td className={styles['bet-name']}>
                                      {handicapList[item].Name}
                                    </td>
                                    <td>
                                      {
                                        handicapList[item].Items.ids.map((v) => (
                                          <div className={styles['pankou-row']} key={v}>
                                          <span className={styles['pankou-name'] + 'txt-ellipsis'}>
                                            {handicapList[item].Items.list[v].Name}
                                          </span>
                                            <span className={styles['pankou-result']}>
                                              {oddsList[v].Odds}
                                          </span>
                                          </div>
                                        ))
                                      }
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </li>
                            ) : ''
                          ))
                        }
                      </ul>
                    </Slide>
                  ))
                }
              </div>
          </div>
        </div>
    );
  }
}

export default firstRound;
