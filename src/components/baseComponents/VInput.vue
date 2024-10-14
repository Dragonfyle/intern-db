<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>

    <input
      :class="{ invalid: !isValid && isInputTouched }"
      type="text"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  label?: string
  modelValue: string
  isValid: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isInputTouched = ref(false)

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
  if (!isInputTouched.value) {
    isInputTouched.value = true
  }
}
</script>

<style scoped>
.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

input {
  width: 100%;
  height: 35px;
  padding: 0 10px;
  border: 1px solid var(--color-border-primary);
  border-radius: 5px;
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
  font-size: 0.9rem;
}

input:focus {
  outline: 1px solid var(--color-border-secondary);
}

.icon-wrapper {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-primary);
  pointer-events: none;
}

input.invalid {
  border-color: var(--color-border-error);
}
</style>
