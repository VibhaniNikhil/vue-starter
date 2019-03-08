import axios from 'axios';
import lodash from 'lodash'

import store from './index';
import * as types from './contextTypes';

export default {
  state: {
    auth: false,
    user: {},
  },
  getters: {
    isAuth: state => state.auth,
  },
  mutations: {
    [types.AUTHENTICATION_TYPE](state, data) {
      state.auth = !lodash.isEmpty(data);
      state.user = data;
    },
  },
  actions: {
    setCurrent(context, payload) {
        context.commit(types.AUTHENTICATION_TYPE, payload);
    },
    login(context, payload) {
        let token = "1dasd4as4d545w4qe54qe";
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(payload))
        store.dispatch('setCurrent', payload);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout(context, payload) {
        store.dispatch('setCurrent', {});
        localStorage.clear();
        delete axios.defaults.headers.common['Authorization'];
    }
  },
};
