import Vue from 'vue'
import Vuex from 'vuex'

//  modules
import {login, register} from '../actions/actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        addUser(state, user) {
            state.user = user
        }
    },
    actions: {
        addUser({ commit }, payload) {
            commit('addUser', payload)
        },
        async authLogin(context , payload) {
            const user = await login(payload.form, payload.rememberMe)
            await context.commit('addUser' , user)
        },
        async authRegister(context , payload) {
            const user = await register(payload.form, payload.rememberMe)
            await context.commit('addUser' , user)
        }
    },
    modules: {}
})