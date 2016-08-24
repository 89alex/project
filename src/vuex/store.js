import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  shops: [
    {id: 1001, title: '碟中谍5：神秘国度', img: '/static/images/img/m-img3.png', num: 4, sale: 50, check: false},
    {id: 1002, title: '诛仙-青云志', img: '/static/images/img/m-img2.png', num: 2, sale: 60, check: false}
  ]
}

const mutations = {
  // 初始化数据
  ADDNUM (state, index) {
    state.shops[index].num ++
  },
  REDUXNUM (state, index) {
    state.shops[index].num > 0 ? (state.shops[index].num --) : state.shops[index].num
  },
  CHECKED (state, index) {
    state.shops[index].check = !state.shops[index].check
  },
  ALLCHECKED (state, bool) {
    state.shops.map(shop => {
      shop.check = bool
    })
  },
  BUYTICKS (state, array) {
    var bools = true
    state.shops.map((shop) => {
      if (shop.id === array.id) {
        shop.num ++
        bools = !bools
      }
    })
    if (bools) {
      state.shops.push(array)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
