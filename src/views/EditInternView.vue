<template>
  <TheInternForm
    heading="Edit Intern"
    buttonLabel="Update Intern"
    :id="id"
    :intern="intern"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import TheInternForm from '@/components/internDetailsView/TheInternForm.vue'
import { usePrefetchOne } from '@/composables/usePrefetchOne'

const { id } = defineProps<{ id: string }>()

const formData = usePrefetchOne(Number(id))

const intern = computed(() => ({
  id: Number(id),
  firstName: formData.firstName,
  lastName: formData.lastName,
  avatar: formData.avatar,
}))
</script>
