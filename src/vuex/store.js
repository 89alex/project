import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  shops: []
}

const mutations = {
  // 初始化数据
  INIT_STORE (state, data) {
    state.shops = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
