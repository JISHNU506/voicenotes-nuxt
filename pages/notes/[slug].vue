<script setup>
import { getNote } from '~/services/notes.js'

const route = useRoute()
const slug = route.params.slug

const { data: note } = await useAsyncData(slug, () => getNote(slug))
</script>

<template>
  <div class="flex flex-col gap-4 lg:flex-row">
    <NoteArticle v-if="note" :note="note" class="flex-1" />
    <p v-else class="flex-1">Could not load the note.</p>

    <AskAiPanel id="ask-ai" class="lg:w-96" />
  </div>
</template>
