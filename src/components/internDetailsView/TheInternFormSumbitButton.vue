<template>
  <VButton>
    <template #label>
      {{ label }}
    </template>
  </VButton>
</template>

<script setup lang="ts">
import VButton from '@/components/baseComponents/VButton.vue'

const { label } = defineProps<{ label: string }>()
</script>
