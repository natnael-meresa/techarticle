import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register'
import Signin from '@/views/Signin'
import Article from '@/views/Article'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Signin
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/articles',
    name: 'articles',
    component: Article,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
