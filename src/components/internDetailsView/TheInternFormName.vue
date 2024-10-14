<template>
  <InternFormSection class="intern-form-name-section">
    <div class="left-column">
      <VInput
        label="First Name"
        :modelValue="firstName"
        :isValid="isFirstNameValid"
        @update:modelValue="emit('update:firstName', $event)"
      />
      <slot name="submit-button" />
    </div>

    <VInput
      label="Last Name"
      :modelValue="lastName"
      :isValid="isLastNameValid"
      @update:modelValue="emit('update:lastName', $event)"
    />
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
}>()

const emit = defineEmits<{
  'update:firstName': [value: string]
  'update:lastName': [value: string]
}>()
</script>

<style scoped>
.intern-form-name-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding-top: 80px;
}

.left-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
}
</style>
