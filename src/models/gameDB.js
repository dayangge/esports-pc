
export default {
  namespace: 'gameDB',

  state: {
    gameDB: {
    },
  },

  effects: {
    *saveGameData({payload}, { call, put, select }) {
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
        gameDB: payload,
      };
    },
  },

};
