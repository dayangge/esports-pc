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
class GameLog extends Component {
  state = {
    pagination: {
      total:0,
      current: 1,
      pageSize:10
    },
  };

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
