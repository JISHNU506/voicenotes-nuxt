<script setup>
import { noteSlugs } from '~/services/notes.js'

const route = useRoute()

function goToPrevious() {
  const index = noteSlugs.indexOf(route.params.slug)
  const previousSlug = noteSlugs[index - 1] || noteSlugs[noteSlugs.length - 1]

  navigateTo(`/notes/${previousSlug}`)
}

function goToNext() {
  const index = noteSlugs.indexOf(route.params.slug)
  const nextSlug = noteSlugs[index + 1] || noteSlugs[0]

  navigateTo(`/notes/${nextSlug}`)
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton aria-label="Previous note" @click="goToPrevious">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </BaseButton>

    <BaseButton aria-label="Next note" @click="goToNext">
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </BaseButton>
  </div>
</template>
