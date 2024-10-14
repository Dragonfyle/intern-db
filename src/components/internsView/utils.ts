import type { Ref } from 'vue'

import CONFIG from '@/config/config'
import type { Intern } from '@/types/intern'

function getEditInternUrl(id: number): string {
  return CONFIG.ROUTES.INTERN_EDIT.replace(':id', id.toString())
}

function insertAndChangeRef<T>(array: T[], index: number, newItem: T): T[] {
  return [...array.slice(0, index), newItem, ...array.slice(index + 1)]
}

function overwriteAndChangeRef(
  ref: Ref<Intern>,
  updates: Partial<Intern>,
): Intern {
  return { ...ref.value, ...updates }
}

export { getEditInternUrl, insertAndChangeRef, overwriteAndChangeRef }
