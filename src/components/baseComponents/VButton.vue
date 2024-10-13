<template>
  <button>
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped>
button {
  width: max-content;
  height: max-content;
  padding: 15px 25px;
  border-radius: 25px;
  border: none;
  background-color: var(--color-green-primary);
  color: var(--color-text-secondary);
}

button:hover {
  cursor: pointer;
  background-color: var(--color-green-secondary);
}

span {
  font-size: 1rem;
  font-weight: 600;
}
</style>
