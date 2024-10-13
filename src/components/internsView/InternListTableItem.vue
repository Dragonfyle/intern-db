<template>
  <li>
    <img width="50" :src="intern.avatarURL" :alt="intern.name" />
    <span>{{ intern.name }}</span>
  </li>
</template>

<script setup lang="ts">
import type { Intern } from '@/types/intern'

defineProps<{
  intern: Intern
}>()
</script>

<style scoped>
li {
  width: 100%;
  align-items: center;
}

img {
  border-radius: 50%;
}
</style>
