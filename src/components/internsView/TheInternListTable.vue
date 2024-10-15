<template>
  <div class="intern-table-wraper">
    <TheInternListHeader />

    <ul v-if="filteredInterns?.length" class="intern-list-table">
      <InternListTableItem
        v-for="intern in filteredInterns"
        :key="intern.id"
        :intern="intern"
      />
    </ul>
    <p v-else>No results</p>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

import type { LocalInternListContext } from '@/types/intern'

import InternListTableItem from './InternListTableItem.vue'
import TheInternListHeader from './TheInternListHeader.vue'

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

p {
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
