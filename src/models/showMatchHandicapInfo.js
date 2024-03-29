export default {
  namespace: 'showMatchHandicapInfo',

  state: {
    isShowMatchID : -1
  },

  effects: {
    *changeMatchHandicapIndex({payload}, { call, put }) {
      yield put({
        type: 'save',
        payload,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        isShowMatchID: payload,
      };
    },
  },
};
