<template>
  <main>
    <TheInternFormName />
    <TheInternFormPhoto />
  </main>
</template>

<script setup lang="ts">
import TheInternFormName from './TheInternFormName.vue'
import TheInternFormPhoto from './TheInternFormPhoto.vue'
</script>

<style scoped>
main {
  width: 60vw;
  height: 30vh;
  display: grid;
  grid-template-columns: minmax(300px, 2fr) 1fr;
  gap: 3%;
  justify-content: center;
  align-items: center;
}
</style>
