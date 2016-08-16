<template>
  <table class="tab-movie-type">
      <td v-for="types in type"><a href="">{{types.type}}</a></td>
  </table>
</template>

<script>
  export default {
    data () {
      return {
        type: []
      }
    },
    methods: {
      getType: function () {
        // num = 12
        this.type = [
          {type: '剧情'}, {type: '喜剧'}, {type: '悲剧'}, {type: '恐怖'}, {type: '好莱坞'}, {type: '国产'}, {type: '偶像'}, {type: '韩剧'}, {type: '剧情'}, {type: '喜剧'}, {type: '悲剧'}, {type: '恐怖'}
        ]
      }
    },
    ready () {
      this.getType()
    }
  }
</script>

<style>
  .tab-movie-type{ width: 100%; padding: .8rem 1.6rem .3rem; background: #e3ebee; display: block; overflow: hidden; }
  .tab-movie-type td{ width: 4.38rem; height: 1.2rem; line-height: 1.2rem; margin: 0 .8rem .6rem 0; display: inline-block; background: #c8c7ff; text-align: center; }
  .tab-movie-type td:nth-of-type(3n){ margin-right: 0; }
</style>