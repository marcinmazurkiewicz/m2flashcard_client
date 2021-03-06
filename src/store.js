import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'm2flashcards',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    token: '',
    loggedUser: ''
  },
  mutations: {
    saveToken(state, token) {
      state.token = token;
    },
    saveLoggedUser(state, user) {
      state.loggedUser = user;
    },
    logout(state) {
      state.token = '';
      state.loggedUser = '';
    }
  },
  actions: {
    saveToken({commit}, token) {
      commit('saveToken', token);
    },
    saveLoggedUser({commit}, user) {
      commit('saveLoggedUser', user);
    },
    logout({commit}) {
      commit('logout');
    }
  },
  getters: {
    getToken: (state) => state.token,
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => state.loggedUser != null && state.loggedUser != ''
  },
  plugins: [vuexPersist.plugin]
})