import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

const router = new Router()

router.map({
  '/index-list': {
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
  }
})

router.redirect({
  '*': '/index-list'
})

router.start(App, '#app')
