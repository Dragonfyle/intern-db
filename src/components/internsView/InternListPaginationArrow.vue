<template>
  <button
    :aria-label="direction === 'prev' ? 'Previous page' : 'Next page'"
    @click="emit('click')"
  >
    <component
      :is="direction === 'prev' ? ChevronsLeftIcon : ChevronsRightIcon"
    />
  </button>
</template>

<script setup lang="ts">
import { ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-vue-next'

defineProps<{
  direction: 'prev' | 'next'
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<style scoped>
button {
  background: none;
  border: 1px solid var(--color-border-primary);
  cursor: pointer;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-green-primary);
}

button:first-child {
  border-right: none;
}

button:last-child {
  border-left: none;
}

svg {
  width: 0.8rem;
}
</style>
