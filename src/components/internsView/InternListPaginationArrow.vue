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
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: var(--color-green-primary);
  cursor: pointer;
}

svg {
  width: 0.8rem;
}
</style>
