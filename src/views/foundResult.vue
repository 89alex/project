<template> 
  <header class="bar bar-nav">
    <h1 class='title'>发现</h1>
  </header>
  <div class="alert">没有找到与 <span>{{keyword}}</span> 相关的电影。可以 <a @click="submit">点击提交该电影</a>。</div>
</template>

<script>
  export default {
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      submit: function () {
        $('body').append($.alert('提交成功', '提示'))
      }
    },
    route: {
      data (transition) {
        this.keyword = transition.to.params.keyword
      }
    }
  }
</script>

<style>
  .bar .title{ color: #fff }
  .alert{    
    padding: 8px 35px 8px 14px;
    margin-bottom: 1.5em;
    text-shadow: 0 1px 0 rgba(255,255,255,0.5);
    background-color: #fcf8e3;
    border: 1px solid #fbeed5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px; 
    color: #c09853
  }
  .alert span,.alert a{ color: #0aa284 }
</style>