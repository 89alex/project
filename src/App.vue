<template>
  <index-nav></index-nav>
  <router-view></router-view>
</template>

<script>
import indexNav from './components/Index'

export default {
  components: {
    indexNav
  }
}
</script>

