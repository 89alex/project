<template>
  <index-nav></index-nav>
  <div class="ui-warp">
    <router-view></router-view>
  </div>
</template>

<script>
import indexNav from './components/Index'

export default {
  components: {
    indexNav
  }
}
</script>

<style>
  .ui-warp{ margin: 2.5rem 0; overflow: hidden;}
</style>
