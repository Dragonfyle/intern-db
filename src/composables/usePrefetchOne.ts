import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

import CONFIG from '@/config/config'
import type { ApiGetOneJson } from '@/types/api'

export function usePrefetchOne(id: number) {
  const formData = reactive({
    firstName: '',
    lastName: '',
    avatar: '',
  })

  const router = useRouter()

  onMounted(async () => {
    const intern: ApiGetOneJson = await fetch(CONFIG.API.GET_ONE(id.toString()))
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          router.back()

          return null
        }
      })
      .catch(() => {
        return null
      })

    formData.firstName = intern.data.first_name
    formData.lastName = intern.data.last_name
    formData.avatar = intern.data.avatar
  })

  return formData
}
