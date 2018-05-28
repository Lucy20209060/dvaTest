
export default {

  namespace: 'indexModel',

  state: {
    num:1
  },

  reducers: {
    saveNum(state, action) {
      return { 
        ...state, 
        num:action.payload
      };
    },
  },
  
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ 
        type: 'saveNum' 
      });
    },
  },
  
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

};
