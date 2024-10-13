<script setup lang="ts">
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router'

import type {
  Intern,
  InternsContext,
  FilteredInternsContext,
} from '@/types/intern'

const interns = ref<Intern[]>([
  {
    id: 1,
    name: 'John Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 2,
    name: 'Jane Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 3,
    name: 'Jim Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 4,
    name: 'Jill Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 5,
    name: 'Jack Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 6,
    name: 'Jake Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 7,
    name: 'Jenny Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
  {
    id: 8,
    name: 'Jared Doe',
    avatarURL: 'https://via.placeholder.com/150',
  } as Intern,
])

const filteredInterns = ref<Intern[]>(interns.value)

function updateInterns(matchingInterns: Intern[]): void {
  filteredInterns.value = matchingInterns
}

provide<InternsContext>('interns', { interns, updateInterns })
provide<FilteredInternsContext>('filteredInterns', filteredInterns)
</script>

<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
