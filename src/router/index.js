import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import EventPage from '../views/EventPage.vue'

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
          component: () => import('../components/CreateEvent/CreateEvent.vue')
        }
      ]
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('../components/Cards/EventsPlaceCard.vue')
    },
    {
      path: '/event',
      name: 'EventPage',
      component: EventPage
    }
  ]
})

export default router
