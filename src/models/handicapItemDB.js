export default {
  namespace: 'handicapItemDB',

  state: {
    handicapItemDB: {
    },
  },

  effects: {
    *saveHandicapItemData({payload}, { call, put }) {
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
        handicapItemDB: payload,
      };
    },
  },

};
