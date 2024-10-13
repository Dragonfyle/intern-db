<template>
  <router-link to="/interns/add">
    <VButton>Add Intern</VButton>
  </router-link>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import VButton from '@/components/baseComponents/VButton.vue'

const router = useRouter()
</script>
