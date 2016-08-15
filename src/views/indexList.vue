<template>
  <a-header></a-header>
  <div class="movie">
    <div v-for="lists in list" class="movie-list">
      <h1><i></i>{{lists.title}}</h1>
        <ul>
          <li v-for="movies in lists.movie">
            <img :src="movies.img" alt="">
            <p><i>1</i>{{movies.name}}</p>
          </li>
        </ul>
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
      }
    },
    ready () {
      this.getState()
    }
  }
</script>

<style>
  .movie{ height: 85%; margin-top: 2.6rem; overflow-y: scroll }
  .movie-list{ overflow: hidden; padding: 0 .6rem 1rem; border-bottom: 1px solid #d4d4d4; }
  .movie-list h1{ height: 2.2rem; line-height: 2rem; font-size: 1.2rem }
  .movie-list h1 i{ width: 1.2rem; height: 1.2rem; background: url(/static/images/icon.png) no-repeat 0 .14rem; background-size: 1.2rem; display: inline-block; }
  .movie-list li{ width: 23.6%; margin-right: .3rem }
  .movie-list li:last-of-type{ margin-right: 0 }
  .movie-list li p{ text-align: center; }
  .movie-list li img{ width: 100% }
</style>