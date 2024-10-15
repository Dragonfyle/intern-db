<template>
  <RouterLink :to="CONFIG.ROUTES.INTERN_ADD">
    <VButton rounded>
      <template #icon> <Plus /> </template>
      <template #label>Add Intern</template>
    </VButton>
  </RouterLink>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

import CONFIG from '@/config/config'
import VButton from '@/components/baseComponents/VButton.vue'
</script>
