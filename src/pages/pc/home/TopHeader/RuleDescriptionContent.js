import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Spin,
  Icon
} from 'antd';
import styles from './index.scss'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


@connect(({ ruleDescription,showGameLog, loading }) => ({
  ruleDescription,
  showGameLog,
  loading: loading.models.ruleDescription,
}))
class RuleDescriptionContent extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'ruleDescription/fetchRuleDescription',
    });
  }

  render() {
    const { ruleDescription: { content }, loading } = this.props;

    return (
      <Fragment>
        {loading?<div className={styles['spin-logo']}> <Spin indicator={antIcon}/> </div>: (<div className={styles.ruleDesc} dangerouslySetInnerHTML={{ __html: content.Content }} />)}
      </Fragment>
    );
  }
}

export default RuleDescriptionContent;
