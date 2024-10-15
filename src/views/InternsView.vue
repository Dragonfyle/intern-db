<template>
  <main>
    <VHeading>User List</VHeading>

    <section>
      <TheInternListToolbar>
        <VSearch placeholder="search for interns..." v-model="searchValue" />
        <TheInternAddButton />
      </TheInternListToolbar>

      <TheInternListTable :is-loading="isLoading" />
    </section>

    <TheInternListPagination />
  </main>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

import VSearch from '@/components/baseComponents/VSearch.vue'
import VHeading from '@/components/baseComponents/VHeading.vue'
import TheInternListToolbar from '@/components/internsView/TheInternListToolbar.vue'
import TheInternListTable from '@/components/internsView/TheInternListTable.vue'
import TheInternListPagination from '@/components/internsView/TheInternListPagination.vue'
import TheInternAddButton from '@/components/internsView/TheInternAddButton.vue'
import { useLocalInternList } from '@/composables/useLocalInternList'
import type { LocalInternListContext } from '@/types/intern'

const searchValue = ref('')
const {
  isLoading,
  filteredInterns,
  deleteInternLocally,
  restoreInternLocally,
  numberOfPages,
  updateFiltered,
} = useLocalInternList(searchValue)

provide<LocalInternListContext>('localInternsContext', {
  isLoading,
  filteredInterns,
  updateFiltered,
  deleteInternLocally,
  restoreInternLocally,
  numberOfPages,
})
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  border-radius: 5px;
  background-color: var(--color-background-secondary);
  box-shadow: 0 0 5px 1px var(--color-shadow);
}

main {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    gap: 10px;
  }
}
</style>
