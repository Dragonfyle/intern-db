<template>
  <div class="intern-form">
    <VHeading>{{ heading }}</VHeading>
    <form @submit.prevent="submitIntern">
      <TheInternFormName
        :firstName="firstName"
        :lastName="lastName"
        :isFirstNameValid="isFirstNameValid"
        :isLastNameValid="isLastNameValid"
        :isSubmitted="isSubmitted"
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
const isSubmitted = ref(false)

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
  isSubmitted.value = true
  try {
    validateForm()

    const internDTO = {
      ...props.intern,
      firstName: firstName.value,
      lastName: lastName.value,
    }

    await createIntern(internDTO)
    router.back()
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

  @media (max-width: 1280px) {
    width: 70vw;
  }

  @media (max-width: 900px) {
    height: auto;
    width: 80vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
