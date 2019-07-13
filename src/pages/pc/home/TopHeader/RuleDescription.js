import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Modal,
} from 'antd';

import RuleDescriptionContent from './RuleDescriptionContent';



class RuleDescription extends Component {
  state = {

  };

  render() {
    const { ruleDescriptionVisible, closeRuleDescriptionModal } = this.props;
    return (
      <Modal
        title="规则说明"
        visible={ruleDescriptionVisible}
        onCancel={closeRuleDescriptionModal}
        width={1000}
        footer={null}
        destroyOnClose
        bodyStyle={{
          minHeight: '400px',
          background: '#283045',
          boxShadow: '0 3px 10px #000',
          overflow: 'auto',
          color:'white',
          padding:0,
          height:'600px'
        }}
      >
        {!ruleDescriptionVisible || (
          <RuleDescriptionContent />
        )}
      </Modal>
    )
  }
}

export default RuleDescription;
