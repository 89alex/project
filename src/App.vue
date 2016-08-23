<template>
  <index-nav keep-alive></index-nav>
  <div class="ui-warp">
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
import indexNav from './components/Index'
import store from './vuex/store'
import {initStore} from './vuex/action'
import {getShop} from './vuex/getter'

export default {
  vuex: {
    actions: {
      initStore
    },
    getters: {
      getShop
    }
  },
  components: {
    indexNav
  },
  store: store,
  ready () {
    console.log(this.getShop)
  }
}
</script>

<style>
  .ui-warp{ margin: 2.14rem 0; overflow: hidden;}
</style>
