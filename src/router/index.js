import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueArea from '@/pages/vueArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'vueArea',
      },
    },
    {
      path: '/vueArea',
      name: 'vueArea',
      component: vueArea,
    },
  ]
})
