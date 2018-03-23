import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Other',
      name: 'Other',
      component: Other
    },
    {
      path: '/nofound',
      name: 'notFound',
      component: resolve => require(['@/views/NotFound'], resolve)
    }
  ]
})
