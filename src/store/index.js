import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './Auth';
import User from './User';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    Auth,
    User,
  },
});

export default store;
