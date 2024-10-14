<template>
  <RouterLink v-if="isLink" :to="url">
    <button @click="emit('click')">
      <slot />
    </button>
  </RouterLink>

  <button v-else @click="emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { url = '' } = defineProps<{
  url?: string
}>()

const emit = defineEmits<{
  click: []
}>()

const isLink = computed(() => !!url)
</script>

<style>
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-text-primary);
}

button:hover {
  color: var(--color-text-tertiary);
}
</style>
