import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './model/robots';
import usersModule from './model/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {

  },
});
