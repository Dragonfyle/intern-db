<template>
  <TheInternForm
    heading="Edit Intern"
    buttonLabel="Update Intern"
    :id="id"
    :intern="intern"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import TheInternForm from '@/components/internDetailsView/TheInternForm.vue'
import type { Intern } from '@/types/intern'
import { usePrefetchOne } from '@/composables/usePrefetchOne'
import { overwriteAndChangeRef } from '@/components/internsView/utils'

const { id } = defineProps<{ id: string }>()

const { firstName, lastName, avatar } = usePrefetchOne(Number(id))

watch([firstName, lastName, avatar], () => {
  updateInternName({
    firstName: firstName.value,
    lastName: lastName.value,
    avatar: avatar.value,
  })
})

const intern = ref<Intern>({
  id: Number(id),
  firstName: '',
  lastName: '',
  avatar: '',
})

function updateInternName(updates: Partial<Intern>) {
  intern.value = overwriteAndChangeRef(intern, updates)
}

function updateInternPhoto(avatar: string) {
  intern.value = overwriteAndChangeRef(intern, { avatar })
}
</script>
