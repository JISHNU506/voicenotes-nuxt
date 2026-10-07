<script setup>
import { getNote } from '~/services/notes.js'

const route = useRoute()
const slug = route.params.slug

const { data: note } = await useAsyncData(slug, () => getNote(slug))
</script>

<template>
  <NoteArticle v-if="note" :note="note" />
  <p v-else>Could not load the note.</p>
</template>
