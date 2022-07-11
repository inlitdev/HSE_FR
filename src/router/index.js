import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    redirect:'accesshome',
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
    redirect:'accesshome',
    children:[
      {
        path: '/accesshome',
        name: 'AccessHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
        meta: {
          requireAuth: true,
          admin: true
				}
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
            meta: {
              requireAuth: true,
              admin: true
            }
          },
          {
            path: '/schedule',
            name: 'Schedulle',
            component: () => import(/* webpackChunkName: "about" */ '../views/rekap/jadwal.vue'),
            meta: {
              requireAuth: true,
              admin: true
            }
          },
        ]
      },
      {
        path: '/present',
        name: 'Presentation',
        component: () => import(/* webpackChunkName: "about" */ '../views/gambar/index.vue'),
        meta: {
          requireAuth: true,
          admin: true
				}
      },
      {
        path: '/user',
        name: 'UserAdministrator',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/index.vue'),
        meta: {
          requireAuth: true,
          admin: true
				}
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    const token = localStorage.getItem('usertoken') != null;
    if (!token) {
      next({path: '/signin', query: {redirect: to.fullPath}});
    } else {
      const user = JSON.parse(localStorage.user);
      const roles = user.role;
      if (roles == 'admin') {
        if (to.matched.some((record) => record.meta.admin)) {
          next();
        }
      } else {
        next({path: '/signin', query: {redirect: to.fullPath}});
      }
    }
  } else {
    const token = localStorage.getItem('usertoken');
    if (token == null) {
      next();
    } else {
      next({path: '/signin', query: {redirect: to.fullPath}});
    }
  }
});

export default router;
