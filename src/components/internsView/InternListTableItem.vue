<template>
  <li>
    <img width="50" height="50" :src="intern.avatar" :alt="intern.firstName" />
    <span>{{ fullName }}</span>

    <TheInternListTableItemActions :id="intern.id" />
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Intern } from '@/types/intern'

import TheInternListTableItemActions from './TheInternListTableItemActions.vue'

const props = defineProps<{
  intern: Intern
}>()

const fullName = computed(
  () => `${props.intern.firstName} ${props.intern.lastName}`,
)
</script>

<style scoped>
li {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
