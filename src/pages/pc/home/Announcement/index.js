import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './index.scss';
import AnnList from './AnnList'


export default class TopHeader extends PureComponent {
  state = {
    AnnListVisible: false,
  };

  showAnnList = () => {
    this.setState({
      annListVisible:true
    })
  };

  closeAnnListModal = () => {
    this.setState({
      annListVisible:false
    })
  };

  render() {
    const { annListVisible } = this.state
    return (
      <div  className={styles['notice-wrapper']}>
        <div  className={styles.box}>
          <a
            className={styles['nav-notice']}
              onClick={this.showAnnList}>
            <Icon type="sound" />&nbsp;&nbsp;公告中心
          </a>
          <marquee  className={styles.marquee}><a  className="msg"><em >[2019-05-26
            02:49]</em>&nbsp;&nbsp;请注意:[电子竞技][早盘][反恐精英]ArenaBulls VS PACT[2019/5/26 2:00:00]比赛延期公告</a><a
             className="msg"><em >[2019-05-25
            23:42]</em>&nbsp;&nbsp;请注意:[电子竞技][早盘][反恐精英]FFAmix VS Nonamer5[2019/5/25 22:00:00]战队弃权公告</a><a
             className="msg"><em >[2019-05-25
            15:46]</em>&nbsp;&nbsp;请注意:[电子竞技][早盘][刀塔II]Vega Squadron VS Team Singularity[2019-05-25
            17:00:00]注单取消公告</a><a  className="msg"><em >[2019-05-25
            10:37]</em>&nbsp;&nbsp;请注意:[电子竞技][早盘][反恐精英]FURIA VS Royal[2019-05-25 09:50:00]比赛延期公告</a><a
             className="msg"><em >[2019-05-25
            01:01]</em>&nbsp;&nbsp;请注意:[电子竞技][早盘][反恐精英]Portal VS Italy[2019/5/24 22:00:00]注单取消公告</a></marquee>
        </div>
        <AnnList AnnListVisible={annListVisible} closeAnnListModal={this.closeAnnListModal}/>
      </div>
    );
  }
}
