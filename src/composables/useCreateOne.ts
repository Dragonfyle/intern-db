import CONFIG from '@/config/config'
import type { Intern } from '@/types/intern'

export function useCreateOne() {
  async function createIntern(internDTO: Intern) {
    const response = await fetch(CONFIG.API.CREATE, {
      method: 'POST',
      body: JSON.stringify(internDTO),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to create intern')
    }

    return await response.json()
  }

  return { createIntern }
}
