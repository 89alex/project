<template>
  <a-header></a-header>
  <div id="movie" v-on:touchend="scrollLoading">
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
        list: [],
        time: null, // 数据加载定时器
        scrollTops: 0
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
        // 滚动加载
        const that = this
        const data = [
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
        // const load = document.getElementsByClassName('infinite-scroll-preloader')[0]
        // const list = document.getElementsByClassName('movie')[0].height
        // const lastList = list[list.length - 1]
        // const $movie = document.getElementById('movie')
        // 判断页面滚动底部
        const scrollHeight = document.body.offsetHeight - window.innerHeight
        if (scrollHeight < (document.body.scrollTop - 20) && scrollHeight > 0) {
          clearTimeout(this.times)
          this.times = setTimeout(function () {
            data.map(datas => {
              that.list.push(datas)
            })
            // that.list.concat(data)
          }, 2000)
          console.log(scrollHeight)
        }
        // console.log((document.body.scrollHeight - document.body.clientHeight))
        // console.log(document.body.offsetHeight)
        // this.list.push(data)
      }
    },
    route: {
      data (transition) {
        // this.getState()
        // transition.next()
        // document.body.scrollTop = 1000
        console.log('路由切入我就执行')
        $('body').append($.showPreloader('加载中，请稍后'))
        setTimeout(function () {
          $.hidePreloader();
        }, 2000);
        transition.next()
      },
      canDeactivate (transition) {
        // this.scrollTops = document.body.scrollTop
        // console.log(this.scrollTops)
        transition.next()
      }
    },
    ready () {
      this.getState()
      console.log('页面载入只执行一次')
    }
  }
</script>

<style>
  #movie{ height: auto; position: relative; }
  .movie-list{ overflow: hidden; padding: 0 .6rem 1rem; border-bottom: 1px solid #d4d4d4; }
  .movie-list h1{ height: 2.2rem; line-height: 2rem; font-size: 1.2rem }
  .movie-list h1 i{ width: 1.2rem; height: 1.2rem; background: url(/static/images/icon.png) no-repeat 0 .14rem; background-size: 1.2rem; display: inline-block; }
  .movie-list li{ width: 23.6%; margin-right: .3rem }
  .movie-list li:last-of-type{ margin-right: 0 }
  .movie-list li p{ text-align: center; }
  .movie-list li img{ width: 100% }
</style>