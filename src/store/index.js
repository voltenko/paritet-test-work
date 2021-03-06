import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      control1value: 0,
      control2value: 0,
      control3value: 0,
  },
  mutations: {
      setControl1Value: (state, num) => state.control1value = +num,
      setControl2Value: (state, num) => state.control2value = +num,
      setControl3Value: (state, num) => state.control3value = +num,
  },
  actions: {
  },
  modules: {
  }
})
