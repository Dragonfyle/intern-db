<template>
  <VButton :disabled="isLoading" :class="{ loading: isLoading }">
    <template #label>
      {{ label }}
    </template>
  </VButton>
</template>

<script setup lang="ts">
import VButton from '@/components/baseComponents/VButton.vue'

const props = withDefaults(
  defineProps<{
    label: string
    isLoading?: boolean
  }>(),
  {
    isLoading: false,
  },
)
</script>

<style scoped>
button.loading {
  background: linear-gradient(
    90deg,
    var(--color-green-tertiary) 0%,
    var(--color-green-secondary) 50%,
    var(--color-green-tertiary) 100%
  );
  background-size: 200% 100%;
  animation: loading-gradient 2s ease infinite;
}

@keyframes loading-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
