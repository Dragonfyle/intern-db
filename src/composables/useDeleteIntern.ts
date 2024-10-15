import { inject } from 'vue'

import CONFIG from '@/config/config'
import type { LocalInternListContext } from '@/types/intern'

export function useDeleteIntern() {
  const { deleteInternLocally, restoreInternLocally } =
    inject<LocalInternListContext>('localInternsContext')!

  async function deleteIntern(id: number) {
    const deletedIntern = deleteInternLocally?.(id)

    try {
      const response = await fetch(CONFIG.API.DELETE(id.toString()), {
        method: 'DELETE',
      })

      if (!response.ok && deletedIntern) {
        restoreInternLocally?.(deletedIntern.intern, deletedIntern.index)
      }
    } catch (error) {
      console.error('Error deleting intern', error)
    }
  }

  return { deleteIntern }
}
