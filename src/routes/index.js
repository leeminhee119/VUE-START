import { createRouter, createWebHashHistory } from 'vue-router'
import About from './About'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      component: About
    }
  ]
})