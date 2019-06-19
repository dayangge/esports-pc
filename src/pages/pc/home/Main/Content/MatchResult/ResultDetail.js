import React, { PureComponent } from 'react';
import styles from '../index.scss';
import Slide from '../../../../../../components/slideAnimate/index';

class ResultDetail extends PureComponent {
  state = {
    show: false,
    isShowNum: 0,
  };

  render() {
    const {
      data,
    } = this.props;
    return (
      <div className={styles.bet} key={data.ID}>
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

export default ResultDetail;
