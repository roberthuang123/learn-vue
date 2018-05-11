<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul class="f_app">
      <li v-for="(item, index) in navItems" @click="toSwitch(index)" :key="index" class="f_item">
        <router-link :to="item.url" class="f_nav" :class="{f_active:activeItem == index}">{{item.name}}</router-link>
      </li>
    </ul>
    <transition name="fade">
      <router-view class="routeBox"></router-view>
    </transition>
    <!-- {{message}}/{{reMessage}}
    <button @click="add">&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <button @click="minus">&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">
    {{fullName}}
    <button @click="changeName">改变名字</button>

    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
    <img :src="imgUrl" alt="图片">

    <div v-if="loginType">
      <label>Username</label>
      <input placeholder="Enter your username" key="username">
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email">
    </div>
    <button @click="toggle">Toggle type</button> -->
    <!-- <page>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </page> -->
  </div>
</template>

<script>
import $ from 'jquery'
import page from './components/page'
let _ = require('lodash')
let axios = require('axios')
export default {
  name: 'App',
  data () {
    return {
      message: 1,
      firstName: 'robert',
      lastName: 'huang',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      imgUrl: '',
      loginType: 1,
      items: [
        { message: 'Foo', name: 'hell' },
        { message: 'Bar', name: 'heihei' },
        { message: 'tim', name: 'hfhfhf' }
      ],
      navItems: [
        {
          url: '/',
          name: '首页'
        },
        {
          url: '/animate',
          name: '动画'
        },
        {
          url: '/animateOne',
          name: '动画页一'
        },
        {
          url: '/animateTwo',
          name: '动画页二'
        },
        {
          url: '/animateThree',
          name: '动画页三'
        },
        {
          url: '/animateFour',
          name: '动画页四'
        },
        {
          url: '/animateFive',
          name: '动画页五'
        }
      ],
      activeItem: 0
    }
  },
  components: {
    page
  },
  created: function () {
    switch (this.$route.path) {
      case '/':
        this.activeItem = 0
        break
      case '/animate':
        this.activeItem = 1
        break
      case '/animateOne':
        this.activeItem = 2
        break
      case '/animateTwo':
        this.activeItem = 3
        break
      case '/animateThree':
        this.activeItem = 4
        break
      case '/animateFour':
        this.activeItem = 5
        break
      case '/animateFive':
        this.activeItem = 6
        break
      default:
        this.activeItem = 0
        break
    }
    // switch (this.$route.path)
    // {
    // }
    // $(function () {
    //   $('.nav').click(function (e) {
    //     $(this).addClass('active')
    //     $(this).siblings().removeClass('active')
    //   })
    // })
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  computed: {
    reMessage: function () {
      return this.message
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    toSwitch (index) {
      if (this.activeItem === index) {
        $('.routeBox').css('display', 'block')
      } else {
        $('.routeBox').css('display', 'none')
        this.activeItem = index
      }
    },
    add: function () {
      this.message++
    },
    minus: function () {
      this.message--
    },
    changeName: function () {
      this.fullName = 'Join Tim'
    },
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          this.imgUrl = ''
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            vm.imgUrl = _.capitalize(response.data.image)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为判定用户停止输入等待的毫秒数
      500
    ),
    toggle: function () {
      this.loginType = !this.loginType
      let arr = this.items.filter(function (item) {
        return item.message.match(/Foo/)
      })
      console.log(arr)
    }
  }
}
</script>

<style>
.routeBox{
  min-height:400px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
::-webkit-scrollbar {display:none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.f_app{
  padding-bottom:10px;
  margin-bottom:10px;
  border-bottom: 2px solid #0d0d0d;
}
*{
  margin: 0;
  padding: 0;
}
.f_line{
  margin: 20px 0;
}
.f_item{
  width:100px;
  height:20px;
  display: inline-block;
  color:#090909;
  border-right:1px solid #aaaaaa;
}
.f_item:last-child{
  border:none;
}
.f_nav{
  display: block;
  width:100%;
  height:100%;
  text-decoration: none;
  color:mediumturquoise;
}
/* .f_nav:hover{
  color:orange;
} */
.f_active{
  color:red;
}
</style>
