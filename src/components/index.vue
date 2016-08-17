<template>
  <nav class="bar bar-tab">
    <a class="tab-item external" :class="{active: 1 == nav}" v-on:click="navChange(1)" v-link="{ name: 'index-list'}">
      <span class="icon icon-home"></span>
      <span class="tab-label">电影</span>
    </a>
    <a class="tab-item external" :class="{active: 2 == nav}" v-on:click="navChange(2)" v-link="{ name: 'movie'}">
      <span class="icon icon-me"></span>
      <span class="tab-label">影院</span>
      <span class="badge">2</span>
    </a>
    <a class="tab-item external" :class="{active: 3 == nav}" v-on:click="navChange(3)" v-link="{ name: 'found'}">
      <span class="icon icon-search"></span>
      <span class="tab-label">发现</span>
    </a>
    <a class="tab-item external" :class="{active: 4 == nav}" v-on:click="navChange(4)" v-link="{ name: 'shop'}">
      <span class="icon icon-cart"></span>
      <span class="tab-label">我的</span>
      <span class="badge">2</span>
    </a>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        routerName: this.$route.name,
        nav: 1
      }
    },
    methods: {
      // 导航切换
      navChange: function (index) {
        this.nav = index
      },
      // 初始化nav active
      navIndex: function () {
        if (this.routerName === 'index-list') {
          this.nav = 1
        } else if (this.routerName === 'movie') {
          this.nav = 2
        } else if (this.routerName === 'found') {
          this.nav = 3
        } else if (this.routerName === 'shop') {
          this.nav = 4
        }
      }
    },
    ready () {
      this.navIndex()
    }
  }
</script>

<style>
  @import '../static/css/base.css';
  body{ position: inherit; overflow: auto; }
  .bar{ background-color: #4c96d8; position: fixed; bottom: 0 }
  .bar-tab .tab-item{ color: #fff }
  .bar-tab .tab-item.active, .bar-tab .tab-item:active{ color: #fff900 }
</style>