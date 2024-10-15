<template>
  <div class="intern-table-wraper">
    <TheInternListHeader />

    <ul v-if="filteredInterns?.length && !isLoading" class="intern-list-table">
      <InternListTableItem
        v-for="intern in filteredInterns"
        :key="intern.id"
        :intern="intern"
      />
    </ul>

    <div
      class="no-results-wrapper"
      v-if="!filteredInterns?.length && !isLoading"
    >
      <p>No results</p>
    </div>

    <div class="loading-spinner-wrapper" v-if="isLoading">
      <LoadingSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import type { LocalInternListContext } from '@/types/intern'

import InternListTableItem from './InternListTableItem.vue'
import TheInternListHeader from './TheInternListHeader.vue'

defineProps<{
  isLoading: boolean
}>()

const { filteredInterns } = inject<LocalInternListContext>(
  'localInternsContext',
)!
</script>

<style scoped>
.intern-table-wraper {
  width: 60vw;
  height: 450px;
  background-color: var(--color-background-secondary);

  @media (max-width: 900px) {
    width: 80vw;
  }
}

ul > li,
header {
  display: grid;
  grid-template-columns: 80px minmax(min-content, 1fr) 80px;
  padding: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 70px minmax(min-content, 1fr) 60px;
  }
}

ul > li:nth-child(even) {
  background-color: var(--color-background-primary);
}

.no-results-wrapper,
.loading-spinner-wrapper {
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
