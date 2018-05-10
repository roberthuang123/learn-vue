import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import animateDemo from '@/components/animateDemo'
import animateOne from '@/components/animateOne'
import animateTwo from '@/components/animateTwo'
import animateThree from '@/components/animateThree'
import animateFour from '@/components/animateFour'
import animateFive from '@/components/animateFive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/animate',
      component: animateDemo
    },
    {
      path: '/animateOne',
      component: animateOne
    },
    {
      path: '/animateTwo',
      component: animateTwo
    },
    {
      path: '/animateThree',
      component: animateThree
    },
    {
      path: '/animateFour',
      component: animateFour
    },
    {
      path: '/animateFive',
      component: animateFive
    }
  ]
})
