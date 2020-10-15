import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Login.layout.vue'),
    children: [
      {
        path: '', component: () => import('../views/Login.view.vue')
      }
    ]
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { Store } = require('../store')

  if (Store.state.user.token === null) {
    if (to.path !== '/') router.push('/')
  } else {
    if (to.path === '/') router.push('/home')
  }
  next()
})

export default router
