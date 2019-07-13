
export default {
  namespace: 'handicapDB',

  state: {
    handicapDB: {
    },
  },

  effects: {
    *saveHandicapData({payload}, { call, put }) {
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
        handicapDB: payload,
      };
    },
  },

};
