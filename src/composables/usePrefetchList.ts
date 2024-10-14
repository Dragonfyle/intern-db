import { onMounted, ref } from 'vue'
import CONFIG from '@/config/config'
import type { Intern } from '@/types/intern'
import type { ApiGetJson } from '@/types/api'

export function usePrefetchList() {
  const prefetchedList = ref<Intern[]>([])

  async function getInterns() {
    try {
      const response = await fetch(CONFIG.API.GET_PAGE('1'))
      if (!response.ok) {
        throw new Error('Failed to fetch interns')
      }
      const data = (await response.json()).data

      prefetchedList.value = data.map((user: ApiGetJson['data']) => ({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        avatar: user.avatar,
      }))
    } catch (error) {
      console.error('Error fetching interns:', error)
    }
  }

  onMounted(() => {
    getInterns()
  })

  return {
    prefetchedList,
  }
}
