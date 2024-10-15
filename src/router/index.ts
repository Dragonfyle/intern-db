import { createRouter, createWebHistory } from 'vue-router'

// @ts-expect-error ts doesn't understand these imports and i don't know how to fix it
import InternsView from '@/views/InternsView.vue'
// @ts-expect-error ts doesn't understand these imports and i don't know how to fix it
import AddInternView from '@/views/AddInternView.vue'
// @ts-expect-error ts doesn't understand these imports and i don't know how to fix it
import EditInternView from '@/views/EditInternView.vue'
import CONFIG from '@/config/config'
import { getInternPageUrl } from '@/components/internsView/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: getInternPageUrl(1),
    },
    {
      path: CONFIG.ROUTES.INTERNS,
      name: 'interns',
      component: InternsView,
      children: [],
    },
    {
      path: CONFIG.ROUTES.INTERN_ADD,
      name: 'addIntern',
      component: AddInternView,
    },
    {
      path: CONFIG.ROUTES.INTERN_EDIT,
      name: 'editIntern',
      component: EditInternView,
      props: true,
    },
  ],
})

export default router
