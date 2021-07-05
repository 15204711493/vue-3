import { createStore } from 'vuex'

export default createStore({
  state: {
   routerParams:{}
  },
  mutations: {
    changeView(state, payload){
      state.routerParams = payload.routerParams
    }
  },
  actions: {
  },
  modules: {
  }
})
