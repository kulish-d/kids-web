import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
