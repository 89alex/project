<template>
  <a-header></a-header>
  <div class="movie" v-on:touchmove="scrollLoading">
    <div id="movie-con">
      <div v-for="lists in list" class="movie-list">
        <h1><i></i>{{lists.title}}</h1>
          <ul>
            <li v-for="movies in lists.movie">
              <img :src="movies.img" alt="">
              <p><i>1</i>{{movies.name}}</p>
            </li>
          </ul>
      </div>
    </div>
    <!-- 加载提示符 -->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>
  </div>
</template>

<script>
  import aHeader from '../components/Header'
  export default {
    components: {
      aHeader
    },
    data () {
      return {
        list: []
      }
    },
    methods: {
      getState: function () {
        this.list = [
            {title: '热映电影排行榜', movie: [
              {img: '/static/images/img/m-img1.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img2.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img3.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img1.png', name: '碟中谍2016'}
            ]},
            {title: '热映电影排行榜', movie: [
              {img: '/static/images/img/m-img1.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img2.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img3.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img1.png', name: '碟中谍2016'}
            ]},
            {title: '热映电影排行榜', movie: [
              {img: '/static/images/img/m-img1.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img2.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img3.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img1.png', name: '碟中谍2016'}
            ]},
            {title: '热映电影排行榜', movie: [
              {img: '/static/images/img/m-img1.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img2.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img3.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img1.png', name: '碟中谍2016'}
            ]}
        ]
      },
      scrollLoading: function (e) {
        /* const data = {title: '热映电影排行榜', movie: [
              {img: '/static/images/img/m-img1.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img2.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img3.png', name: '碟中谍2016'},
              {img: '../static/images/img/m-img1.png', name: '碟中谍2016'}
        ]} */
        // const load = document.getElementsByClassName('infinite-scroll-preloader')[0]
        // const list = document.getElementsByClassName('movie-list')
        // const lastList = list[list.length - 1]
        // const load = document.getElementById('movie-con')
        // console.log(oTop)
        // console.log(data)
        // this.list.push(data)
      }
    },
    ready () {
      this.getState()
    }
  }
</script>

<style>
  .movie{ height: 85%; margin-top: 2.6rem; overflow-y: scroll }
  .movie-con{ overflow: hidden; clear: both; }
  .movie-list{ overflow: hidden; padding: 0 .6rem 1rem; border-bottom: 1px solid #d4d4d4; }
  .movie-list h1{ height: 2.2rem; line-height: 2rem; font-size: 1.2rem }
  .movie-list h1 i{ width: 1.2rem; height: 1.2rem; background: url(/static/images/icon.png) no-repeat 0 .14rem; background-size: 1.2rem; display: inline-block; }
  .movie-list li{ width: 23.6%; margin-right: .3rem }
  .movie-list li:last-of-type{ margin-right: 0 }
  .movie-list li p{ text-align: center; }
  .movie-list li img{ width: 100% }
</style>