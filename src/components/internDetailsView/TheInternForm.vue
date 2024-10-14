<template>
  <div class="intern-form">
    <VHeading>{{ heading }}</VHeading>
    <form @submit.prevent="submitIntern">
      <TheInternFormName
        :firstName="firstName"
        :lastName="lastName"
        :isFirstNameValid="isFirstNameValid"
        :isLastNameValid="isLastNameValid"
        @update:firstName="firstName = $event"
        @update:lastName="lastName = $event"
      >
        <template #submit-button>
          <TheInternFormSumbitButton :label="buttonLabel" />
        </template>
      </TheInternFormName>

      <TheInternFormPhoto :avatar="intern.avatar" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { useRouter } from 'vue-router'

import VHeading from '@/components/baseComponents/VHeading.vue'
import CONFIG from '@/config/config'
import { useCreateIntern } from '@/composables/useCreateIntern'
import type { Intern } from '@/types/intern'

import TheInternFormSumbitButton from './TheInternFormSumbitButton.vue'
import TheInternFormName from './TheInternFormName.vue'
import TheInternFormPhoto from './TheInternFormPhoto.vue'

const props = defineProps<{
  heading: string
  buttonLabel: string
  intern: Intern
}>()

const firstName = ref('')
const lastName = ref('')

watchEffect(() => {
  firstName.value = props.intern.firstName
  lastName.value = props.intern.lastName
})

const router = useRouter()
const { createIntern } = useCreateIntern()

const isFirstNameValid = computed(() => firstName.value !== '')
const isLastNameValid = computed(() => lastName.value !== '')

function validateForm() {
  if (!isFirstNameValid.value || !isLastNameValid.value) {
    throw new Error('First name and last name are required')
  }
}

async function submitIntern() {
  try {
    validateForm()

    const internDTO = {
      ...props.intern,
      firstName: firstName.value,
      lastName: lastName.value,
    }

    await createIntern(internDTO)
    router.push(CONFIG.ROUTES.INTERNS)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
.intern-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

form {
  width: 60vw;
  height: 30vh;
  display: grid;
  grid-template-columns: minmax(300px, 2fr) 1fr;
  gap: 3%;
  justify-content: center;
  align-items: center;
}
</style>
