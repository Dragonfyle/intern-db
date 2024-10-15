<template>
  <li>
    <RouterLink :to="url">{{ page }}</RouterLink>
  </li>
</template>

<script setup lang="ts">
import { getInternPageUrl } from './utils'

const { page } = defineProps<{
  page: number
}>()

const url = getInternPageUrl(page)
</script>

<style scoped>
li {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--color-border-primary);
  list-style: none;
}

li:nth-child(2) {
  border-left: 1px solid var(--color-border-primary);
}

a {
  padding: 8px 10px;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--color-green-primary);
}

a.router-link-active {
  background-color: var(--color-green-primary);
  color: var(--color-text-secondary);
}
</style>
