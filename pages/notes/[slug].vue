<script setup>
import { getNote } from '~/services/notes.js'

const route = useRoute()
const slug = route.params.slug

const { data: note, status } = useLazyAsyncData(slug, () => getNote(slug))
</script>

<template>
  <p v-if="status === 'pending'" class="text-body text-muted">Loading...</p>
  <NoteArticle v-else-if="note" :note="note" />
  <p v-else class="text-body text-muted">Could not load the note.</p>
</template>
