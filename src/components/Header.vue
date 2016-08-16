<template>
  <header class="bar bar-nav">
    <select name="" id="">
      <option value="">广州{{method}}</option>
      <option value="">深圳</option>
      <option value="">东莞</option>
      <option value="">茂名</option>
    </select>
    <span class="icon icon-search pull-right"></span>
    <h1 class="title"><ul><li class="t-active">热映</li><li>待映</li><li>榜单</li></ul></h1>
  </header>
</template>

<style>
  .bar-nav{ background: #318ee0 }
  .bar-nav h1{ color: #fff }
  .bar-nav .title { font-size: .76rem }
  .bar-nav .icon { color: #fff }
  .bar-nav select{ background: none; border: 0; color: #fff; font-size: .76rem; position: absolute; z-index: 100; top: .5rem; }
  .bar-nav select option { background: #318ee0; border: 0 }
  .bar-nav ul{ width: 6.8rem; height: 1.4rem; margin: .4rem auto; overflow: hidden; background: #014691; border-radius: .2rem}
  .bar-nav ul li{width: 32%; line-height: 1.4rem; float: left; text-align: center; }
  .bar-nav ul .t-active{ background: #fff; color: #2169b3 }
</style>