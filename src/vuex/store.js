import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		'isLogin': false,

	},

	actions: {
		isLogin({ commit }, platform){
			commit('isLogin', platform)
		}
	},

	mutations: {
		isLogin(state, platform){
			state.isLogin = platform;
		}
	},

	getters: {	
        isLogin : state => state.isLogin   
	}
})

export default store