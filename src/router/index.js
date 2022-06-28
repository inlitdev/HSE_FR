import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path:'/',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    redirect:'home',
    children:[
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/dash',
        name: 'Dash',
        component: () => import(/* webpackChunkName: "about" */ '../views/dash/index.vue'),
      },
    ]
  },
  {
    path:'/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main_View.vue'),
    redirect:'home',
    children:[
      {
        path: '/accesshome',
        name: 'AccessHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
      },
      {
        path: '/',
        name: 'WorkProgram',
        component: () => import(/* webpackChunkName: "about" */ '../views/rekap/index.vue'),
        children:[
          {
            path: '/activity',
            name: 'Activity',
            component: () => import(/* webpackChunkName: "about" */ '../views/rekap/activity.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
