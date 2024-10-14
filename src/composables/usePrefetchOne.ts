import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import CONFIG from '@/config/config'
import type { ApiGetJson } from '@/types/api'

export function usePrefetchOne(id: number) {
  const firstName = ref('')
  const lastName = ref('')
  const avatar = ref('')

  const router = useRouter()

  onMounted(async () => {
    const intern: ApiGetJson = await fetch(CONFIG.API.GET_ONE(id.toString()))
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          router.push(CONFIG.ROUTES.INTERNS)
          return null
        }
      })
      .catch(() => {
        return null
      })

    firstName.value = intern.data.first_name
    lastName.value = intern.data.last_name
    avatar.value = intern.data.avatar
  })

  return {
    firstName,
    lastName,
    avatar,
  }
}
