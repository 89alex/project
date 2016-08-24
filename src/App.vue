<template>
  <index-nav keep-alive></index-nav>
  <div class="ui-warp">
    <router-view keep-alive></router-view>
  </div>
  <div class="modal-overlay"></div>
</template>

<script>
import indexNav from './components/Index'
import store from './vuex/store'

export default {
  components: {
    indexNav
  },
  store: store,
  ready () {
  },
  route: {
  }
}
</script>

<style>
  .ui-warp{ margin: 2.14rem 0; overflow: hidden;}
  .modal-overlay{ position: fixed; top: 0;}
  .modal{ position: fixed; top: 40%; }
  .actions-modal{ position: fixed; }
</style>
