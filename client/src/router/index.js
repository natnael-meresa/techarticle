import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Register from '@/views/Register'
import Signin from '@/views/Signin'
import Article from '@/views/Article'

const routes = [
  {
    path: "/",
    component: () => import("@/views/Home"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeGlobal")
      },
      {
        path: "my-feed",
        name: "home-my-feed",
        component: () => import("@/views/HomeMyFeed")
      },
      {
        path: "tag/:tag",
        name: "home-tag",
        component: () => import("@/views/HomeTag")
      }
    ]
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
    name: "settings",
    path: "/settings",
    component: () => import("@/views/Settings")
  },
  {
    path: "/profile/:username",
    component: () => import("@/views/Profile"),
    children: [
      {
        path: "",
        name: "profile",
        component: () => import("@/views/ProfileArticles")
      },
      {
        name: "profile-favorites",
        path: "favorites",
        component: () => import("@/views/ProfileFavorited")
      }
    ]
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
  },
  {
    path: '/article-create',
    name: 'article-create',
    component: Article,
  },
  {
    path: "/article/:slug",
    name: "article-show",
    component: () => import("@/views/ArticleShow"),
    props: true
  },
  {
    path: "/editor/:slug?",
    name: "article-edit",
    props: true,
    component: () => import("@/views/ArticleEdit")
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
