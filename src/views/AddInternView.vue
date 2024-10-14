<template>
  <TheInternForm
    heading="Add Intern"
    buttonLabel="Add Intern"
    :intern="newIntern"
    :update-intern-name="updateInternName"
    :update-intern-photo="updateInternPhoto"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import TheInternForm from '@/components/internDetailsView/TheInternForm.vue'
import type { Intern, InternFormContext } from '@/types/intern'
import { provide } from 'vue'

const newIntern = reactive<Intern>({
  id: 0,
  firstName: '',
  lastName: '',
  avatar: '',
})

provide<InternFormContext>('internListActions', {
  updateInternName,
  updateInternPhoto,
})

function updateInternName(firstName: string, lastName: string) {
  newIntern.firstName = firstName
  newIntern.lastName = lastName
}

function updateInternPhoto(avatar: string) {
  newIntern.avatar = avatar
}
</script>
