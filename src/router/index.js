import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Dashboard/Home.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/Dashboard/Profile.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorPage',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' })
//   else if (to.name == 'Login' && localStorage.getItem('token')) next({ name: 'Dashboard' })
//   else next()
// })

export default router
