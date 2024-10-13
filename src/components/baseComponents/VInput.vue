<template>
  <div class="input-wrapper">
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <Search class="search-icon" />
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineProps<{
  placeholder: string
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.input-wrapper {
  position: relative;
  height: 35px;
  width: clamp(150px, 100%, 300px);
}

input {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: none;
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  font-size: 0.9rem;
}

.search-icon {
  width: 17px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-primary);
  pointer-events: none;
}
</style>
