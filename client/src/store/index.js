import Vue from 'vue';
import Vuex from 'vuex';
import * as movies from './modules/movies';
import * as user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    movies,
    user,
  },
});

export default store;
