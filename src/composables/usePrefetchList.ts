import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import CONFIG from '@/config/config'
import type { ApiGetListJson, ApiGetOneJson } from '@/types/api'
import type { Intern } from '@/types/intern'

export function usePrefetchList() {
  const internList = ref<Intern[]>([])
  const numberOfPages = ref(0)
  const route = useRoute()

  async function getInterns() {
    try {
      const response = await fetch(
        CONFIG.API.GET_PAGE(route.params.page as string),
      )
      if (!response.ok) {
        throw new Error('Failed to fetch interns')
      }
      const responseJson: ApiGetListJson = await response.json()
      numberOfPages.value = responseJson.total_pages

      internList.value = responseJson.data.map(
        (user: ApiGetOneJson['data']) => ({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          avatar: user.avatar,
        }),
      )
    } catch (error) {
      console.error('Error fetching interns:', error)
    }
  }

  watch(route, () => {
    getInterns()
  })

  onMounted(() => {
    getInterns()
  })

  return {
    internList,
    numberOfPages,
  }
}
