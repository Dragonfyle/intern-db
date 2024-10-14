<template>
  <nav>
    <ul>
      <InternListPaginationArrow direction="prev" />
      <InternListPaginationLink v-for="page in 10" :key="page" :page="page" />
      <InternListPaginationArrow direction="next" />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import InternListPaginationLink from './InternListPaginationLink.vue'
import InternListPaginationArrow from './InternListPaginationArrow.vue'
</script>

<style scoped>
ul {
  width: max-content;
  display: flex;
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 5px;
}
</style>
