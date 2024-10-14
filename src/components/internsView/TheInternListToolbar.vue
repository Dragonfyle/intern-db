<template>
  <div class="toolbar-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.toolbar-wrapper {
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-primary);
}
</style>
