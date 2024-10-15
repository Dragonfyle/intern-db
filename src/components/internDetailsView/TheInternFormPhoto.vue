<template>
  <InternFormSection class="intern-form-photo">
    <div class="intern-form-photo-wrapper">
      <img :src="avatar || avatarPlaceholder" alt="Intern avatar" />
    </div>

    <div class="intern-form-photo-button-wrapper">
      <TheInternFormPhotoButton
        v-if="!isPhotoButtonClicked"
        @click="isPhotoButtonClicked = true"
      />
      <VInput v-else :isValid="true" :modelValue="avatar" />
    </div>
  </InternFormSection>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import VInput from '@/components/baseComponents/VInput.vue'
import avatarPlaceholder from '@/assets/avatarPlaceholder.png'

import TheInternFormPhotoButton from './TheInternFormPhotoButton.vue'
import InternFormSection from './InternFormSection.vue'

const props = defineProps<{ avatar: string }>()

const isPhotoButtonClicked = ref(false)

const avatar = computed(() => {
  return props.avatar
})
</script>

<style scoped>
.intern-form-photo {
  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    gap: 20px;
  }
}

.intern-form-photo-wrapper {
  display: flex;
  justify-content: center;
}

.intern-form-photo-button-wrapper {
  height: 100%;
  display: flex;
  align-items: flex-end;
}

img {
  border-radius: 50%;
}
</style>
