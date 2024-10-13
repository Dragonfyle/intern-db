<template>
  <VInput placeholder="search for interns..." v-model="searchValue" />
</template>

<script setup lang="ts">
import { inject, ref, watch } from 'vue'

import type { InternsContext } from '@/types/intern'
import VInput from '@/components/baseComponents/VInput.vue'

const searchValue = ref('')
const { updateInterns, interns } = inject<InternsContext>('interns') || {}

watch(searchValue, () => {
  if (!updateInterns || !interns) return
  updateInterns(
    interns.value?.filter(intern =>
      intern.name.toLowerCase().includes(searchValue.value.toLowerCase()),
    ) ?? [],
  )
})
</script>
