import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : null
  },
  mutations: {
    addUser(state , user){
      state.user = user
    }
  },
  actions: {
    addUser({commit} , payload){
      commit('addUser' , payload)
    }
  },
  modules: {
  }
})
