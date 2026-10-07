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
  <div class="flex gap-1">
    <UButton icon="i-lucide-arrow-left" color="neutral" variant="ghost" aria-label="Previous note" @click="goToPrevious" />
    <UButton icon="i-lucide-arrow-right" color="neutral" variant="ghost" aria-label="Next note" @click="goToNext" />
  </div>
</template>
