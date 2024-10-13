<template>
  <div class="toolbar-wrapper">
    <TheInternListSearch />
    <TheAddInternButton />
  </div>
</template>

<script setup lang="ts">
import TheInternListSearch from './TheInternListSearch.vue'
import TheAddInternButton from './TheAddInternButton.vue'
</script>

<style scoped>
.toolbar-wrapper {
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-primary);
}
</style>
