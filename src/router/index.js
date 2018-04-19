import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Other from '@/components/Other'

Vue.use(Router)

// 定义名为 todo-item 的新组件
// Vue.component('todo-item', {
//   template: '<li>这是个待办项</li>'
// })

const router = new Router({
  mode: 'history',
  // alias: {
  //   '@': resolve('src')
  // },
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
    },
    {
      path: '/nofound',
      name: 'notFound',
      component: () => import('@/components/Other')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('haha');
  next();
})
export default router;
