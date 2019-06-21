import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Icon,
} from 'antd';
import ETable from '../../../../components/Etable';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

@connect(({ runningAccountLog, loading }) => ({
  runningAccountLog,
  loading: loading.models.runningAccountLog,
}))
class RunningAccountTable extends Component {
  state = {
    pagination: {
      total: 0,
      current: 1,
      PageSize: 1,
    },
  };

  columns = [
    {
      title: '概述',
      dataIndex: 'Description',
    },
    {
      title: '类型',
      dataIndex: 'Type',
    },
    {
      title: '金额',
      dataIndex: 'Money',
    },
    {
      title: '余额',
      dataIndex: 'Balance',
    },
    {
      title: '日期',
      dataIndex: 'CreateAt',
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'runningAccountLog/fetchRunningAccountLog',
      callback: response => {
        const { RecordCount, PageIndex, PageSize } = response;
        this.setState({
          pagination: {
            total: RecordCount,
            current: PageIndex,
            PageSize,
          },
        });
      },
    });
  }

  handleStandardTableChange = page => {
    console.log(page);
    const { dispatch } = this.props;
    const params = {
      PageIndex: page.current,
      pageSize: page.pageSize,
    };
    dispatch({
      type: 'userInfo/fetchTable',
      payload: params,
    });
  };

  render() {
    const { runningAccountLog: { runningAccountLog }, loading, runningAccountVisible, closeRunningAccountModal } = this.props;
    const { list } = runningAccountLog;
    return (
      <Fragment>
        <ETable
          dataSource={list}
          rowKey='ID'
          columns={this.columns}
          onSelectRow={this.handleSelectRows}
          pagination={this.state.pagination}
          onChange={this.handleStandardTableChange}
          loading={loading && { indicator: antIcon }}
        />
      </Fragment>

    );
  }
}

export default RunningAccountTable;
