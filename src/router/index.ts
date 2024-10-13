import { createRouter, createWebHistory } from 'vue-router'

import InternsView from '@/views/InternsView.vue'

import CONFIG from '@/config/config'
// import InternDetailsView from '@/views/InternDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: CONFIG.ROUTES.INTERN,
    },
    {
      path: CONFIG.ROUTES.INTERN,
      name: 'internsView',
      component: InternsView,
    },
    // {
    //   path: '/interns/:id',
    //   name: 'internDetails',
    //   component: () => import('../views/InternDetailsView.vue'),
    // },
    {
      path: CONFIG.ROUTES.INTERN_ADD,
      name: 'addIntern',
      component: () => import('@/views/AddInternView.vue'),
    },
  ],
})

export default router
