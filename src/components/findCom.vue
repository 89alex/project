<template>
  <div class="bar bar-header-secondary">
    <div class="searchbar">
      <a class="searchbar-cancel">取消</a>
      <div class="search-input">
        <label class="icon icon-search" for="search"></label>
        <input @keydown="searchKey" v-model="keyword" type="search" id='search' placeholder='找电影，电影院...'/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      searchKey: function (e) {
        if(e.keyCode == '13'){
          this.$route.router.go({
            name: 'foundresult',
            params: {keyword: this.keyword}
          })
        }
      }
    }
  }
</script>

<style>
  .bar .searchbar{ background: rgba(0, 84, 245, 0.1) }
</style>