import React, { Component } from 'react';
import { connect } from 'dva';
import {
  Form,
  Modal,
} from 'antd';
import GameLogTable from './GameLogTable';

@connect(({ showGameLog }) => ({
  showGameLog,
}))
@Form.create()
class GameLog extends Component {
  state = {
    pagination: {
      total:0,
      current: 1,
      pageSize:10
    },
  };

  columns = [
    {
      title: '订单号',
      dataIndex: 'ID',
    },
    {
      title: '比赛',
      dataIndex: 'Match',
    },
    {
      title: '投注',
      dataIndex: 'Bet',
    },
    {
      title: '投注时间UTC+8',
      dataIndex: 'CreateAt',
    },
    {
      title: '投注额',
      dataIndex: 'BetMoney',
    },
    {
      title: '赔率',
      dataIndex: 'Odds',
    },
    {
      title: '盈亏',
      dataIndex: 'Money',
    },
    {
      title: '状态',
      dataIndex: 'Status',
    },
  ];

  closeGameLogModal = () => {
    const { dispatch } = this.props;
    dispatch({
      type:'showGameLog/toggleGameLog',
      payload: false
    })
  };


  render() {
    const { showGameLog: {isShowGameLog} } = this.props;
    return (
      <Modal
        title="游戏记录"
        visible={isShowGameLog}
        onCancel={this.closeGameLogModal}
        width={1000}
        footer={null}
        destroyOnClose
        bodyStyle={{
          minHeight: '400px',
          background: '#3e3e3e',
          boxShadow: '0 3px 10px #000',
          overflow: 'hidden',
          color:'white',
          padding:0
        }}
      >
        {!isShowGameLog || (
            <GameLogTable/>
          )}
      </Modal>

    );
  }
}

export default GameLog;
