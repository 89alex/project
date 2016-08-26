import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

const router = new Router({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: true
})

router.map({
  '/': {
    name: 'index-list',
    component: (resolve) => {
      require(['./views/indexList.vue'], resolve)
    }
  },
  '/movie': {
    name: 'movie',
    component: (resolve) => {
      require(['./views/Movie.vue'], resolve)
    }
  },
  '/found': {
    name: 'found',
    component: (resolve) => {
      require(['./views/Found.vue'], resolve)
    }
  },
  '/shop': {
    name: 'shop',
    component: (resolve) => {
      require(['./views/Shop.vue'], resolve)
    }
  },
  '/moviedetail/:id': {
    name: 'moviedetail',
    component: (resolve) => {
      require(['./views/movieDetail.vue'], resolve)
    }
  }
})

router.start(App, '#app')
