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
    }
  },
  actions: {
    saveToken({commit}, token) {
      commit('saveToken', token);
    },
    saveLoggedUser({commit}, user) {
      commit('saveLoggedUser', user);
    }
  },
  getters: {
    getToken: (state) => state.token,
    getLoggedUser: (state) => state.loggedUser
  },
  plugins: [vuexPersist.plugin]
})