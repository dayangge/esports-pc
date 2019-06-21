import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Form,
  Button,
  Input,
  Icon,
  DatePicker,
} from 'antd';

import ETable from '../../../../components/Etable';
import styles from './index.scss'

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

@connect(({ gameLog,showGameLog, loading }) => ({
  gameLog,
  showGameLog,
  loading: loading.models.gameLog,
}))
@Form.create()
class GameLogTable extends Component {
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
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'gameLog/fetchGameLog',
      callback: response => {
        const {RecordCount, PageIndex, PageSize} = response;
        this.setState({
          pagination: {
            total:RecordCount,
            current: PageIndex,
            PageSize,
          }
        });
      },
    });
  }

  handleStandardTableChange = page => {
    const { dispatch } = this.props;
    const params = {
      PageIndex: page.current,
      PageSize: page.pageSize,
    };
    dispatch({
      type: 'userInfo/fetchTable',
      payload: params,
    });
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row >
          <Col md={5} sm={24}>
            <FormItem label="订单编号">{
              getFieldDecorator('palt')(
                <Input />
              )
            }
            </FormItem>
          </Col>
          <Col md={5} sm={24}>
            <FormItem label="订单状态">{
              getFieldDecorator('pal')(
                <Input />
              )
            }
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="选择时间">
              {
                getFieldDecorator('time')(
                  <RangePicker />
                )
              }
            </FormItem>
          </Col>
          <Col md={4} sm={24}>
            <Button className={styles.searchButton} type="primary" htmlType="submit">
              查询
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    return this.renderSimpleForm();
  }

  render() {
    const { gameLog: { gameLog }, loading } = this.props;
    const { list } = gameLog;
    return (
          <Fragment>
            <div >{this.renderForm()}</div>
            <ETable
              dataSource={list}
              rowKey='ID'
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              pagination={this.state.pagination}
              onChange={this.handleStandardTableChange}
              loading={loading && {indicator:antIcon}}
            />
          </Fragment>
    );
  }
}

export default GameLogTable;
