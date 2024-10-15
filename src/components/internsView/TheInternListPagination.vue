<template>
  <nav>
    <ul>
      <InternListPaginationArrow
        :isDisabled="currentPage === 1"
        direction="prev"
        @click="goToPreviousPage"
      />
      <InternListPaginationLink
        v-for="page in numberOfPages"
        :key="page"
        :page="page"
      />
      <InternListPaginationArrow
        :isDisabled="currentPage === numberOfPages"
        direction="next"
        @click="goToNextPage"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import type { LocalInternListContext } from '@/types/intern'

import InternListPaginationLink from './InternListPaginationLink.vue'
import InternListPaginationArrow from './InternListPaginationArrow.vue'
import { getInternPageUrl } from './utils'

const route = useRoute()
const router = useRouter()

const { numberOfPages } = inject<LocalInternListContext>('localInternsContext')!

const currentPage = computed(() => Number(route.params.page))

const goToPage = (page: number) => {
  router.push(getInternPageUrl(page))
}

const goToPreviousPage = () => goToPage(Math.max(1, currentPage.value - 1))
const goToNextPage = () =>
  goToPage(Math.min(numberOfPages.value, currentPage.value + 1))
</script>

<style scoped>
ul {
  height: 30px;
  max-height: max-content;
  width: max-content;
  display: flex;
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 5px;
}
</style>
