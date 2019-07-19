import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {Icon,Input} from 'antd'
import styles from '../index.scss';


@connect(({ matchDB,oddsList,betShopCart, handicapDB,handicapItemDB }) => ({
  matchDB,
  handicapDB,
  handicapItemDB,
  oddsList,
  betShopCart,
}))
class BetItem extends PureComponent {
  state = {
    slideIn: false,
    showSelectOption:false,
    amount:''
  };

  constructor(props){
    super(props);
    this.selectRef = React.createRef()
  }

  delShopCartItem = (id) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'betShopCart/delBetShopCart',
      payload: id
    });
  };

  setAmount = (e,id) => {
    const { dispatch } = this.props;
    let { value } = e.target;
    if(value.match(/[^\d]/g)){
      return false
    }
    value = +value + '';
    if(value.length > 7){
      return false
    }
    this.setState({
      amount:value
    });
    dispatch({
      type: 'betShopCart/addShopCartItemAmount',
      payload: {id,amount:value}
    });
  };

  setAmountFromSelect = (amount,id) => {
    const { dispatch } = this.props;
    this.setState({
      amount
    });
    dispatch({
      type: 'betShopCart/addShopCartItemAmount',
      payload: {id,amount}
    });
    this.setState({
      showSelectOption: false
    })
  };

  selectAmount = () => {
    const { showSelectOption } = this.state;
    this.setState({
      showSelectOption: !showSelectOption
    })
  };

  renderErr(){
    const { data } = this.props;
    const err = data.err;
    if(err === 0){
      return ''
    }
    if(err !== 0){
      return (
        <div className={styles.errInfo}>
          余额不足
        </div>
      )
    }
  }

  render() {
    const { showSelectOption } = this.state;
    const { data,
      matchDB: {matchDB},
      handicapDB: {handicapDB},
      handicapItemDB: {handicapItemDB},
      oddsList: {oddsList}
    } = this.props;
    const {id, matchID, handicapID, handicapItemID,} = data;
    return (
      <li className={styles['bet-item']}>
        <div className={styles['bet-item-header']}>
          <span className={styles.title}>
            {matchDB[matchID].match_name}   {handicapDB[handicapID].handicap_name}
          </span>
        </div>
        <div className={styles['bet-item-content']}>
          <div className={styles.handicapInfo}>
            <span className={styles.handicap}>{handicapItemDB[handicapItemID].content}</span>
            <span className={styles.betMoney}>投注额</span>
            <span className={styles.win}>收益</span>
          </div>
          {this.renderErr()}
          <div className={styles.winInfo}>
            <span className={styles.odds}>
              {oddsList[handicapItemID].odds}
            </span>
            <span className={styles.x}>x</span>
            <div className={styles['bet-select']} ref={this.selectRef}>
              <Input className={styles['bet-select-input']} value={this.state.amount} onChange={e => this.setAmount(e,id)}/>
              <div className={styles['bet-select-arrow']} onClick={this.selectAmount}>
                <Icon className={showSelectOption ? `${styles.icon} ${styles.active}` : styles.icon} type="down" />
              </div>
              {
                showSelectOption ? (
                  <ul className={styles['option-box']} >
                    <li onClick={() => this.setAmountFromSelect(10, id)} className={styles.option}>10</li>
                    <li onClick={() => this.setAmountFromSelect(100, id)} className={styles.option}>100</li>
                    <li onClick={() => this.setAmountFromSelect(500, id)} className={styles.option}>500</li>
                    <li onClick={() => this.setAmountFromSelect(1000, id)} className={styles.option}>1000</li>
                    <li onClick={() => this.setAmountFromSelect(2000, id)} className={styles.option}>最大投注</li>
                  </ul>
                ): ''
              }
            </div>
            <span className={styles.equal}>=</span>
            <span className={styles.money}>￥{(oddsList[handicapItemID].odds * this.state.amount).toFixed(3)}</span>
            <Icon className={styles.del} onClick={() => this.delShopCartItem(id)} type="close-circle" />
          </div>
        </div>
      </li>
    );
  }
}

export default BetItem;
