import React, { Component,} from 'react';
import {
  Modal,
} from 'antd';

import AnnListTable from './AnnListTable'

class AnnList extends Component {
  render() {
    const { AnnListVisible, closeAnnListModal } = this.props;
    return (
      <Modal
        title="公告中心"
        visible={AnnListVisible}
        onCancel={closeAnnListModal}
        width={1000}
        footer={null}
        destroyOnClose
        bodyStyle={{
          minHeight: '400px',
          background: '#3e3e3e',
          boxShadow: '0 3px 10px #000',
          overflow: 'hidden',
          color:'white',
          padding:0,
          height: '560px'
        }}
      >
        {!AnnListVisible|| (
          <AnnListTable />
        )}
      </Modal>

    );
  }
}

export default AnnList;
