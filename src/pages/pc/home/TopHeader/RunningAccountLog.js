import React, { Component,} from 'react';
import {
   Modal,
} from 'antd';

import RunningAccountLogTable from './RunningAccountLogTable'

class RunningAccountTable extends Component {
  render() {
    const { runningAccountVisible, closeRunningAccountModal } = this.props;
    return (
      <Modal
        title="规则说明"
        visible={runningAccountVisible}
        onCancel={closeRunningAccountModal}
        width={1000}
        footer={null}
        destroyOnClose
        bodyStyle={{
          minHeight: '400px',
          background: '#283045',
          boxShadow: '0 3px 10px #000',
          overflow: 'hidden',
          color:'white',
          padding:0
        }}
      >
        {!runningAccountVisible || (
          <RunningAccountLogTable />
          )}
      </Modal>

    );
  }
}

export default RunningAccountTable;
