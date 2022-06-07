import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage,
      children: [
        {
          path: '/',
          name: 'Start',
          component: () => import('../components/StartPage/Start.vue')
        },
        {
          path: '/create-event',
          name: 'CreateEvent',
          component: () => import('../components/StartPage/CreateEvent.vue')
        }
      ]
    },

  ]
})

export default router
