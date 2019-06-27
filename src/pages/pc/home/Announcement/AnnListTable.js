import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Icon,
} from 'antd';
import ETable from '../../../../components/Etable';
import styles from './index.scss'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

@connect(({ annList, loading }) => ({
  annList,
  loading: loading.models.annList,
}))
class AnnListTable extends Component {
  state = {
    pagination: {
      total: 0,
      current: 1,
      PageSize: 1,
    },
  };

  columns = [
    {
      title: '标题',
      dataIndex: 'Title',
      width: 600,
      render: (val) => (
        <span className={styles.annListTitle}>{val}</span>
)
    },
    {
      title: '日期',
      dataIndex: 'CreateAt',
    },

  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'annList/fetchAnnList',
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
      type: 'annList/fetchAnnList',
      payload: params,
    });
  };

  render() {
    const { annList: { annList }, loading,  } = this.props;
    const { list } = annList;
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

export default AnnListTable;
