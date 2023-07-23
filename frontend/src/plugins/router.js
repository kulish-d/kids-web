import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home')
  },
  {
    path: '/about',
    component: () => import('../pages/About')
  },
  {
    path: '/source',
    component: () => import('../pages/Source')
  },
  {
    path: '/css-guide',
    component: () => import('../pages/Guide')
  },
  {
    path: '/auth-or-reg',
    component: () => import('../pages/AuthOrRegister')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
