<template>
  <div class="item-actions">
    <VIconButton :url="editionUrl">
      <Edit width="15" />
    </VIconButton>

    <VIconButton>
      <Trash width="15" @click="deleteIntern(id)" />
    </VIconButton>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { Edit, Trash } from 'lucide-vue-next'

import CONFIG from '@/config/config'
import { getEditInternUrl } from '@/components/internsView/utils'
import VIconButton from '@/components/baseComponents/VIconButton.vue'
import type { InternsContext } from '@/types/intern'

const { id } = defineProps<{
  id: number
}>()

const { deleteInternLocally, restoreInternLocally } =
  inject<InternsContext>('internList')!

const editionUrl = computed(() => getEditInternUrl(id))

async function deleteIntern(id: number) {
  const deletedIntern = deleteInternLocally?.(id)

  try {
    const response = await fetch(CONFIG.API.DELETE(id.toString()), {
      method: 'DELETE',
    })

    if (!response.ok && deletedIntern) {
      restoreInternLocally?.(deletedIntern.intern, deletedIntern.index)
    }
  } catch (error) {
    console.error('Error deleting intern', error)
  }
}
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
