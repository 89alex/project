<template>
  <a-header></a-header>
  <div class="buy-movie">
    <img width="100%" src="/static/images/img/buy-banner1.png" alt="">
    <ul class="movie-list">
      <li v-for="lists in list">
        <dl>
          <dt><img width="100%" :src="lists.img" alt=""></dt>
          <dd><h2>{{lists.title}}</h2><span class="max">{{lists.max}}</span><p class="num"><i>{{lists.grade}}</i>分</p></dd>
          <dd><p>{{lists.miaoshu}}</p></dd>
          <dd><p>主演：{{lists.persons}}</p></dd>
        </dl>
        <span @click="buyT($index)" class="buy">购票</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import aHeader from '../components/Header'
  import {buyTicks} from '../vuex/action'
  export default {
    vuex: {
      actions: {
        buyTicks
      }
    },
    components: {
      aHeader
    },
    data () {
      return {
        list: ''
      }
    },
    methods: {
      getState: function () {
        this.list = [
          {id: 1001, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img1.png', max: 'IMAX 3D', grade: '9.0', sale: 50},
          {id: 1002, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img2.png', max: 'IMAX 2D', grade: '8.0', sale: 60},
          {id: 1003, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img3.png', max: 'IMAX 2D', grade: '7.0', sale: 70},
          {id: 1004, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img2.png', max: 'IMAX 2D', grade: '8.0', sale: 65},
          {id: 1005, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img3.png', max: 'IMAX 2D', grade: '7.0', sale: 80},
          {id: 1006, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img3.png', max: 'IMAX 2D', grade: '7.0', sale: 80},
          {id: 1007, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img3.png', max: 'IMAX 2D', grade: '7.0', sale: 80},
          {id: 1008, title: '碟中谍5：神秘国度', miaoshu: '外练净骨皮，阿汤扒飞机', persons: '汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅', img: '/static/images/img/m-img3.png', max: 'IMAX 2D', grade: '7.0', sale: 80}
        ]
      },
      buyT: function (index) {
        const array = {id: this.list[index].id, title: this.list[index].title, img: this.list[index].img, num: 1, sale: this.list[index].sale, check: false}
        this.buyTicks(array)
        // $.toast('购票成功，请在购物车结算', 1000345);
        $('body').append( $.alert('购票成功，请在购物车中结算', '购票提示'))
      }
    },
    route: {
      data (transition) {
        // this.getState()
      }
    },
    ready () {
      this.getState()
    }
  }
</script>

<style>
  .buy-movie .movie-list{ padding: .6rem; }
  .buy-movie .movie-list li{ width: 100% ; margin-bottom: 1rem; position: relative;}
  .buy-movie .movie-list li .buy{ padding: .2rem 1rem; background: #b22100; position: absolute; bottom: .3rem; right: .4rem;  color: #fff;border-radius: .16rem }
  .buy-movie .movie-list dl{ width: 100% }
  .buy-movie .movie-list dt,.buy-movie ul dd{ float: left; }
  .buy-movie .movie-list dt{ width: 3.4rem; }
  .buy-movie .movie-list dd{ width: 74%; margin-left: .4rem; }
  .buy-movie .movie-list dd:first-of-type{ height: 2rem; line-height: 2rem }
  .buy-movie .movie-list dd h2{ display: inline-block; font-size: .7rem }
  .buy-movie .movie-list dd p{ width: 70%; text-overflow: ellipsis;white-space: nowrap; overflow: hidden; }
  .buy-movie .movie-list dd .max{ padding: .1rem .2rem; margin-left: .6rem; background: #4d70ff; color: #fff; border-radius: .16rem }
  .buy-movie .movie-list dd .num{ width: auto; float: right; color: #ff5503; font-size: .7rem }
  .buy-movie .movie-list dd i{ display: inline-block; font-size: 1rem }
</style>
