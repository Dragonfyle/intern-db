<template>
  <button :class="{ rounded }">
    <slot name="icon" />

    <span>
      <slot name="label" />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  rounded?: boolean
}>()
</script>

<style scoped>
button {
  width: max-content;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-green-primary);
  color: var(--color-text-secondary);
}

button.rounded {
  border-radius: 25px;
}

button:hover {
  cursor: pointer;
  background-color: var(--color-green-secondary);
  color: var(--color-text-secondary);
}

span {
  font-size: 1rem;
}
</style>
