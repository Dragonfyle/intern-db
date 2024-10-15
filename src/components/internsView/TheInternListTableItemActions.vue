<template>
  <div class="item-actions">
    <VIconButton :url="editionUrl">
      <Edit width="15" />
    </VIconButton>

    <VIconButton>
      <Trash width="15" @click="deleteIntern(Number(id))" />
    </VIconButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Edit, Trash } from 'lucide-vue-next'

import { getEditInternUrl } from '@/components/internsView/utils'
import VIconButton from '@/components/baseComponents/VIconButton.vue'
import { useDeleteIntern } from '@/composables/useDeleteIntern'
import type {} from '@/types/intern'

const { id } = defineProps<{
  id: number | string
}>()

const { deleteIntern } = useDeleteIntern()

const editionUrl = computed(() => getEditInternUrl(Number(id)))
</script>

<style scoped>
.item-actions {
  display: flex;
  gap: 10px;
  color: var(--color-text-primary);
}

a:visited {
  color: inherit;
}
</style>
