import { ref, watch, type Ref } from 'vue'

import { usePrefetchList } from './usePrefetchList'
import type { Intern, DeletedIntern } from '@/types/intern'
import { insertAndChangeRef } from '@/components/internsView/utils'

export function useLocalInternList(searchValue: Ref<string>) {
  const { prefetchedList } = usePrefetchList()
  const filteredInterns = ref<Intern[]>(prefetchedList.value)

  function filterInterns(interns: Intern[]): Intern[] {
    return interns.filter(intern => {
      const fullName = `${intern.firstName} ${intern.lastName}`

      return fullName.toLowerCase().includes(searchValue.value.toLowerCase())
    })
  }

  watch([searchValue, prefetchedList], () => {
    if (!updateFiltered || !prefetchedList.value) return

    const filteredInterns = filterInterns(prefetchedList.value)
    updateFiltered(filteredInterns)
  })

  watch(prefetchedList, () => {
    updateFiltered(prefetchedList.value)
  })

  function updateFiltered(matchingInterns: Intern[]): void {
    filteredInterns.value = matchingInterns
  }

  function deleteInternLocally(id: number): DeletedIntern | undefined {
    const index = prefetchedList.value.findIndex(intern => intern.id === id)

    if (index === -1) return undefined

    const intern = prefetchedList.value[index]
    prefetchedList.value = prefetchedList.value.filter(
      intern => intern.id !== id,
    )
    return { intern, index }
  }

  function restoreInternLocally(intern: Intern, atIndex: number): void {
    prefetchedList.value = insertAndChangeRef(
      prefetchedList.value,
      atIndex,
      intern,
    )
  }

  return {
    internList: prefetchedList,
    filteredInterns,
    updateFiltered,
    deleteInternLocally,
    restoreInternLocally,
  }
}
