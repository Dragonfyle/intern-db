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
  display: flex;
  background-color: var(--color-background-secondary);
  width: max-content;
}
</style>
