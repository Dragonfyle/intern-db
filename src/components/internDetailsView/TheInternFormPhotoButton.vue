<template>
  <button @click="emit('click')">
    <div class="intern-form-photo-button-icon">
      <Camera width="15" />
    </div>
    <span>Change Photo</span>
  </button>
</template>

<script setup lang="ts">
import { Camera } from 'lucide-vue-next'

const emit = defineEmits<{
  click: []
}>()
</script>

<style scoped>
button {
  width: 100%;
  height: 35px;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border-tertiary);
  border-radius: 5px;
  background-color: var(--color-background-secondary);
  cursor: pointer;
}

span {
  color: var(--color-text-primary);
}

.intern-form-photo-button-icon {
  padding-top: 2px;
}
</style>
