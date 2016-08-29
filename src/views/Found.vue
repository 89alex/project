<template>
  <div class="found">
    <header class="bar bar-nav">
      <h1 class='title'>发现</h1>
    </header>
    <find-com></find-com>
    <div style="margin-top: 4.8rem"></div>
    <h2>热门搜索</h2>
    <div class="found-hot">
      <ul>
        <li v-for="hots in hot"><a href="">{{hots.name}}</a></li>
      </ul>
    </div>
    <div class="movie-type">
      <h2>类型</h2>
      <movie-type></movie-type>
    </div>
  </div>
</template>

<script>
  import findCom from '../components/findCom'
  import movieType from '../components/movieType'
  export default {
    components: {
      findCom,
      movieType
    },
    data () {
      return {
        hot: []
      }
    },
    methods: {
      getHot: function () {
        // num = 5
        this.hot = [
          {name: '我们的十年'},
          {name: '像素大战'},
          {name: '碟中谍2016'},
          {name: '十二生肖'},
          {name: '致青春-原来你还在这里'}
        ]
      }
    },
    ready () {
      this.getHot()
      $('body').append($.showPreloader('加载中，请稍后'))
      setTimeout(function () {
        $.hidePreloader();
      }, 1000);
    }
  }
</script>

<style>
  .found .bar .searchbar .searchbar-cancel{ color: #fff }
  .found .title{ color: #fff }
  .found h2{ padding:0 0 .3rem 1rem; font-size: .8rem; border-bottom: 1px solid #e3ebee }
  .found .found-hot{ padding: 1rem; overflow: hidden; }
  .found .found-hot li{ padding: .1rem .4rem; margin:0 1rem .6rem 0; background: #fff; border: 2px solid #3391f3; }
  .found .movie-type{ padding: 0 .4rem; overflow: hidden; }
  .found .movie-type h2{ border: 0 }
</style>