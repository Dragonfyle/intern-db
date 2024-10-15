import CONFIG from '@/config/config'
import type { Intern } from '@/types/intern'

export function useUpdateOne() {
  async function updateIntern(internDTO: Intern) {
    const response = await fetch(CONFIG.API.UPDATE(internDTO.id.toString()), {
      method: 'PUT',
      body: JSON.stringify(internDTO),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to update intern')
    }

    return await response.json()
  }

  return { updateIntern }
}
