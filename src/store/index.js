import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      control1value: 1,
      control2value: 2,
      control3value: 3,
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
