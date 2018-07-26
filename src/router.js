import Vue from 'vue'
import Router from 'vue-router'
import Photography from './views/Photography.vue'
import Index from './views/Index.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/photography',
      name: 'photography',
      component: Photography
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
