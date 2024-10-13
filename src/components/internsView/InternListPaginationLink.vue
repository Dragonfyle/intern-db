<template>
  <li>
    <a href="#">{{ page }}</a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  page: number
}>()
</script>

<style scoped>
li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border-primary);
  border-left: none;
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
</style>
