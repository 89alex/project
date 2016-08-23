<template>
  <div class="my-shop">
    <div class="sale">
      <header class="bar bar-nav">
        <h1 class="title">我的订单</h1>
      </header>
      <div class="sale-list" v-for="states in state">
        <div class="s-header"><label for=""><input class="ui-checkbox" :checked="allCheckeds" type="checkbox" v-on:click="Checked($index)"></label><p>{{states.title}}</p></div>
        <dl>
          <dt><img width="100%" :src="states.img" alt=""></dt>
          <dd>单价：<strong>￥{{states.sale}}</strong></dd>
          <dd>总价：<strong>￥{{states.sale*states.num}}</strong></dd>
          <dd class="s-add"><p><span v-on:click="reduxNum($index)" class="btn reduce">-</span> {{states.num}} <span v-on:click="addNum($index)" class="btn add">+</span></p></dd>
        </dl>
      </div>
    </div>
    <div class="sale-account">
      <label for=""><input class="ui-checkbox" v-on:click="allChecked" type="checkbox"> 全选</label>
      <div class="right">合计：<span>￥{{checks}}</span> <input class="confirm" type="submit" value="结算({{c_num}})"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        state: [],
        allCheckeds: false,
        d_check: 0,
        num: 0
      }
    },
    methods: {
      getState: function () {
        this.state = [
          {id: 1001, title: '碟中谍5：神秘国度', img: '/static/images/img/m-img3.png', num: 4, sale: 50, check: false},
          {id: 1002, title: '诛仙-青云志', img: '/static/images/img/m-img2.png', num: 2, sale: 60, check: false}
        ]
      },
      allChecked: function (e) {
        /* const checkbox = document.getElementsByClassName('ui-checkbox')
        const bool = e.target.getAttribute('checked')
        if (bool) {
          for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].removeAttribute('checked')
          }
        } else {
          for (var r = 0; r < checkbox.length; r++) {
            checkbox[r].setAttribute('checked', 'checked')
          }
        }
        console.log(bool) */
        // console.log(e.target.setAttribute('checked', 'checked'))
        this.allCheckeds = !this.allCheckeds
        this.state.map(states => {
          states.check = this.allCheckeds
        })
        // setTimeout(this.setNum, 100)
      },
      Checked: function (index) {
        this.state.map((states, num) => {
          if (num === index) {
            states.check = !states.check
          }
        })
      },
      addNum: function (index) {
        this.state.map((states, num) => {
          if (num === index) {
            states.num ++
          }
        })
      },
      reduxNum: function (index) {
        this.state.map((states, num) => {
          if (num === index && states.num > 0) {
            states.num --
          }
        })
      }
    },
    computed: {
      checks: function () {
        this.d_check = 0
        this.state.map(states => {
          if (states.check) {
            this.d_check = this.d_check + states.num * states.sale
          }
        })
        return this.d_check
      },
      c_num: function () {
        this.num = 0
        this.state.map(states => {
          if (states.check) {
            this.num ++
          }
        })
        return this.num
      }
    },
    ready () {
      this.getState()
    }
  }
</script>

<style>
  .my-shop{ width: 100%; height: 100%; background: #ccccc7; }
  .my-shop label, .my-shop p{ display: inline-block; }
  .sale{ background: #fff }
  .my-shop .bar h1{ color: #fff }
  .my-shop .sale .s-header{ padding-left: .4rem; font-size: .8rem;  }
  .my-shop .sale .s-header p{ margin-left: .6rem; }
  .my-shop .sale .sale-list{ padding: .4rem; overflow: hidden; border-bottom: 1px solid #ccc; }
  .my-shop .sale .sale-list dl{ padding: .4rem; overflow: hidden; font-size: .8rem; }
  .my-shop .sale .sale-list dt{ width: 4rem; float: left; }
  .my-shop .sale .sale-list dd{ width: 60%; margin-left: 1rem; margin-top: .6rem; float: left; }
  .my-shop .sale .sale-list dd strong{ color: #cb2626 }
  .my-shop .sale .sale-list .s-add .btn{ width: 1rem; display: inline-block; }
  .my-shop .sale .sale-list .s-add p{ width: 4rem; background: #f00; text-align: center;  color: #fff; }
  .my-shop .sale-account{ width: 100%; height: 2rem; line-height: 2rem; position: absolute; bottom: 2.5rem; border-top:1px solid #ccc; font-size: .8rem; }
  .my-shop .sale-account label{ margin-left: 1rem; float: left; }
  .my-shop .sale-account .right{ float: right; }
  .my-shop .sale-account .right span{ color: #ff0000 }
  .my-shop .sale-account .confirm{ width: 4.6rem; height: 2rem; line-height: 2rem; margin-left: 1rem; background: #ff0000; border: 0; color: #fff; }
  .ui-checkbox{     -webkit-appearance: none;width: .8rem;height: .8rem;background-color: #fff;border: 1px solid #ddd;display: inline-block;background-clip: content-box;user-select: none;border-radius: 3px;position: relative; vertical-align: middle; }
  .ui-checkbox:checked::before {content: '√';width: 15px;height: auto;color: #f12754;font-weight: 700;position: absolute;top: -7px;left: 0;font-style: oblique;font-size: 1rem;}
</style>