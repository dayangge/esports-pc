import { normalizeData } from 'esports-core/utils/util';
import { postBetOrder } from 'esports-core/services/api';
import { message } from 'antd';



export default {
  namespace: 'betShopCart',

  state: {
    shopCart: {
      ids:[],
      list:{}
    },
  },

  effects: {
    *postBetOrder({ payload, callback }, { call, put, select }) {
      let data = yield call(postBetOrder, payload);
      const shopCartData = yield select( state => state.betShopCart.shopCart);
      let errNum = 0;
      data.map((val) => {
        if( val.err === false ){
          let index = shopCartData.ids.indexOf(val.id);
          delete shopCartData.list[val.id];
          shopCartData.ids.splice(index, 1);
        }else{
          shopCartData.list[val.id].err = val.msg;
          errNum += 1
        }
      });
      yield put({
        type: 'save',
        payload:shopCartData
      });
      if(callback) callback(errNum)
    },
    *addBetShopCart({ payload }, { call, put, select }) {
      const data = normalizeData(payload, 'handicapID');
      const firstIds = data.ids[0];
      const firstInfo = data.list[data.ids[0]];
      const shopCartData = yield select( state => state.betShopCart.shopCart);
      if(shopCartData.ids.length > 6){
        message.info('购物车满了。。。请投注');
        return
      }
      if(shopCartData.ids.indexOf(firstIds) === -1){
        shopCartData.ids.push(firstIds);
        shopCartData.list[firstIds] = firstInfo
      }else{
        shopCartData.list[firstIds] = firstInfo
      }
      yield put({
        type: 'save',
        payload:shopCartData
      })
    },
    *delBetShopCart({ payload }, { call, put, select }) {
      const data = yield select( state => state.betShopCart.shopCart);
      const index = data.ids.indexOf(payload);
      if (index > -1) {
        delete data.list[payload];
        data.ids.splice(index, 1);
      }
      yield put({
        type: 'save',
        payload:data
      })
    },
    *addShopCartItemAmount({ payload }, { call, put, select }) {
      const data = yield select( state => state.betShopCart.shopCart);
      data.list[payload.id].amount = payload.amount;
      yield put({
        type: 'save',
        payload:data
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        shopCart: payload,
      };
    },
  },
};
