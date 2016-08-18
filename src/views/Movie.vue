<template>
  <a-header></a-header>
  <div class="buy-movie">
    <img width="100%" src="/static/images/img/buy-banner1.png" alt="">
    <ul class="movie-list">
      <li>
        <dl>
          <dt><img width="100%" src="/static/images/img/m-img1.png" alt=""></dt>
          <dd><h2>碟中谍5：神秘国度</h2><span class="max">IMAX 3D</span><p class="num"><i>9.0</i>分</p></dd>
          <dd><p>外练净骨皮，阿汤扒飞机</p></dd>
          <dd><p>主演：汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅</p></dd>
        </dl>
        <span class="buy">购票</span>
      </li>
      <li>
        <dl>
          <dt><img width="100%" src="/static/images/img/m-img1.png" alt=""></dt>
          <dd><h2>碟中谍5：神秘国度</h2><span class="max">IMAX 3D</span><p class="num"><i>9.0</i>分</p></dd>
          <dd><p>外练净骨皮，阿汤扒飞机</p></dd>
          <dd><p>主演：汤姆.克鲁斯 丽贝卡 佛洛斯 王宝强 陈奕迅</p></dd>
        </dl>
        <span class="buy">购票</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import aHeader from '../components/Header'
  export default {
    components: {
      aHeader
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
