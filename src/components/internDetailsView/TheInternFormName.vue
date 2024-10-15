<template>
  <InternFormSection class="intern-form-name-section">
    <div class="buttons-wrapper">
      <VInput
        label="First Name"
        :modelValue="firstName"
        :isValid="isFirstNameValid"
        :submitted="isSubmitted"
        @update:modelValue="emit('update:firstName', $event)"
      />

      <VInput
        label="Last Name"
        :modelValue="lastName"
        :isValid="isLastNameValid"
        :submitted="isSubmitted"
        @update:modelValue="emit('update:lastName', $event)"
      />
    </div>
    <slot name="submit-button" />
  </InternFormSection>
</template>

<script setup lang="ts">
import InternFormSection from './InternFormSection.vue'
import VInput from '@/components/baseComponents/VInput.vue'

defineProps<{
  firstName: string
  lastName: string
  isFirstNameValid: boolean
  isLastNameValid: boolean
  isSubmitted: boolean
}>()

const emit = defineEmits<{
  'update:firstName': [value: string]
  'update:lastName': [value: string]
}>()
</script>

<style scoped>
.intern-form-name-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding-top: 80px;

  @media (max-width: 900px) {
    padding-top: 20px;
    grid-template-columns: 1fr;
    gap: 20px;
    height: 200px;
  }
}

.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 900px) {
    order: 1;
  }
}
</style>
