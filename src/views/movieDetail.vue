<template>
  <div class="movie-detail">
    <header class="bar bar-nav">
      <h1 class="title">影视详情</h1>
    </header>
    <img width="100%" src="/static/images/img/movieD1.png" alt="">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        movieId: ''
      }
    },
    methods: {
      winBack: function () { // 后退
        window.history.go(-1)
      }
    },
    route: {
      data (transition) {
        // $('body').scrollTop(0)
        $('body').append($.showPreloader('加载中，请稍后'))
        setTimeout(function () {
          $.hidePreloader();
        }, 1000);
        document.body.scrollTop = 0
        this.movieId = transition.to.params.id // 获取电影id
        $('body').append($.alert('当前影视ID为："'+this.movieId+'"', '提示'))
        // transition.next()
      }
    }
  }
</script>

<style scoped>
  .movie-detail .title{ color: #fff }
</style>