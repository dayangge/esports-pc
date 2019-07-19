import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import {Icon,Modal} from 'antd'
import BetItem from './betItem'
import styles from '../index.scss';

@connect(({ betShopCart,oddsList }) => ({
  betShopCart,
  oddsList
}))
class ShopCart extends PureComponent {
  logTotalBetAmount = 0;
  state = {
    slideIn: false
  };

  submitBets  = () => {
    const { dispatch, betShopCart: {shopCart}, oddsList: {oddsList} } = this.props;
    let params = {
      orders: []
    };
    for (let i = 0; i <shopCart.ids.length ; i++) {
      if(shopCart.list[shopCart.ids[i]].amount < 5){
        Modal.info({
          title:'提示',
          content:'每单投注额不得低于5元'});
        return false
      }
    }
    shopCart.ids.map((val) => {
      params.orders.push({
        id:val,
        handicap_item_id: shopCart.list[val].handicapItemID,
        odds: oddsList[shopCart.list[val].handicapItemID].odds,
        amount: shopCart.list[val].amount
      })
    });
    dispatch({
      type: 'betShopCart/postBetOrder',
      payload: params,
      callback:(res) => {
        let message = res === 0 ? '投注成功': `投注完毕，有${res}注投注失败,请到投注区查看`;
        Modal.info({
          title:'提示',
          content:message})
      }
    });
  };

  render() {
    const {betShopCart : {shopCart}, oddsList: {oddsList}} = this.props;
    const { ids ,list } = shopCart;
    let totalBetAmount = 0;
    let totalWinAmount = 0;
    shopCart.ids.map( (val) => {
      let odds = oddsList[list[val].handicapItemID] === undefined ? '1' : oddsList[list[val].handicapItemID].odds;
      totalBetAmount += +shopCart.list[val].amount;
      totalWinAmount += odds * shopCart.list[val].amount
    });
    this.logTotalBetAmount = totalBetAmount;
    return (
     <Fragment>
       <div className={styles['bet-box']}>
         <ul className={styles['bet-list']}>
           {
             ids.length > 0 ?
               ids.map( (val) => (
                 <BetItem data={list[val]} key={val}/>
                 ))
               :
               (<div className={styles['bet-none']}>暂无投注</div>)
            }
0         }
         </ul>
       </div>
       {
         ids.length > 0 && <div className={styles['bet-total']}>
           <div className={styles.calc}>
             <div className={styles.left}>总投注额:{Number(totalBetAmount)}</div>
             <div className={styles.right}>总收益额:{totalWinAmount.toFixed(3)}</div>
           </div>
           <div className={styles.button}>
             <button className={styles['button-submit']} onClick={this.submitBets}>
               确定投注
             </button>
             <div className={styles.warning}>
               <Icon type="info-circle" />  系统将自动接收较佳收益率
             </div>
           </div>
         </div>
       }
     </Fragment>
    );
  }
}

export default ShopCart;
