
export default {

  namespace: 'indexModel',

  state: {
    num:1
  },

  reducers: {
    saveNum(state, action) {
      return { 
        ...state, 
        num:action.payload || 5
      };
    },
  },
  
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log(111)
      // yield put({ 
      //   type: 'saveNum',
      //   payload: 45
      // });
      yield [put({type: 'saveNum', payload: 45 })]
    },
  },
  
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

};
