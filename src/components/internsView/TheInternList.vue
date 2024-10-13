<template>
  <div class="intern-list-wrapper">
    <VHeading>User List</VHeading>

    <main>
      <TheInternListToolbar />
      <TheInternListTable />
    </main>

    <TheInternListPagination />
  </div>
</template>

<script setup lang="ts">
import VHeading from '@/components/baseComponents/VHeading.vue'

import TheInternListToolbar from './TheInternListToolbar.vue'
import TheInternListTable from './TheInternListTable.vue'
import TheInternListPagination from './TheInternListPagination.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  background-color: var(--color-background-secondary);
  box-shadow: 0 0 5px 1px var(--color-shadow);
}

.intern-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
