export default {
  namespace: 'changeBetSectionStatus',

  state: {
    betSectionStatus: false
  },

  effects: {
    *changeStatus({payload}, { call, put }) {
      yield put({
        type: 'save',
        payload: payload,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        betSectionStatus: payload,
      };
    },
  },
};
