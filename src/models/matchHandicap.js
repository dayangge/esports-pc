import { matchHandicap } from 'esports-core/services/api';
import {  normalizeDataForHandicapItem, newDataAccordingToID } from 'esports-core/utils/util';


export default {
  namespace: 'matchHandicap',

  state: {
    matchHandicap: {
      list: [],
      round: []
    }
  },

  effects: {
    *fetchMatchHandicap({ payload }, { call, put, select }) {
      let data = yield call(matchHandicap, payload);

      if(data === undefined){return}
      const { handicapData, handicapItemData } = normalizeDataForHandicapItem(data,'handicap_id');
      /*只存储盘口详情*/
      const handicapDB = yield select( state => state.handicapDB.handicapDB);
      const newHandicapDB = Object.assign({}, handicapDB, handicapData.list);

      /*只存储每个盘口项详情*/
      const handicapItemDB = yield select( state => state.handicapItemDB.handicapItemDB);
      const newMatchHandicapItemDB = Object.assign({}, handicapItemDB, handicapItemData);

      /*存储与比赛映射盘口详情*/
      const matchHandicapDB = yield select( state => state.matchHandicapDB.matchHandicapDB);
      let matchHandicapDetailData = newDataAccordingToID(data,'round');
      let matchHandicapOne = {};
      matchHandicapOne[payload.match_id] = matchHandicapDetailData;
      const newMatchHandicapDB = Object.assign({}, matchHandicapDB, matchHandicapOne);
      yield put({
        type: 'handicapItemDB/saveHandicapItemData',
        payload: newMatchHandicapItemDB,
      });
      yield put({
        type: 'matchHandicapDB/saveMatchHandicapData',
        payload: newMatchHandicapDB,
      });
      yield put({
        type: 'handicapDB/saveHandicapData',
        payload: newHandicapDB,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        matchHandicap: payload,
      };
    },
  },
};
