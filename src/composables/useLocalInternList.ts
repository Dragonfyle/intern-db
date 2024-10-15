import { ref, watch, type Ref } from 'vue'

import type { Intern, DeletedIntern } from '@/types/intern'
import { insertAndChangeRef } from '@/components/internsView/utils'

import { usePrefetchList } from './usePrefetchList'

export function useLocalInternList(searchValue: Ref<string>) {
  const { internList, numberOfPages, isLoading } = usePrefetchList()
  const filteredInterns = ref<Intern[]>(internList.value)

  function filterInterns(interns: Intern[]): Intern[] {
    return interns.filter(intern => {
      const fullName = `${intern.firstName} ${intern.lastName}`

      return fullName.toLowerCase().includes(searchValue.value.toLowerCase())
    })
  }

  watch([searchValue, internList], () => {
    if (!internList.value) return

    const filteredInterns = filterInterns(internList.value)
    updateFiltered(filteredInterns)
  })

  function updateFiltered(matchingInterns: Intern[]): void {
    filteredInterns.value = matchingInterns
  }

  function deleteInternLocally(id: number): DeletedIntern | undefined {
    const index = internList.value.findIndex(intern => intern.id === id)

    if (index === -1) return undefined

    const intern = internList.value[index]
    internList.value = internList.value.filter(intern => intern.id !== id)
    return { intern, index }
  }

  function restoreInternLocally(intern: Intern, atIndex: number): void {
    internList.value = insertAndChangeRef(internList.value, atIndex, intern)
  }

  return {
    filteredInterns,
    updateFiltered,
    deleteInternLocally,
    restoreInternLocally,
    numberOfPages,
    isLoading,
  }
}
