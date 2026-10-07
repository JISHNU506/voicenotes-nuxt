<script setup>
import { getNote } from '~/services/notes.js'

const { data: note } = await useAsyncData('note', () => getNote('iS9L44'))
</script>

<template>
  <div class="flex flex-col gap-4 lg:flex-row">
    <NoteArticle v-if="note" :note="note" class="flex-1" />
    <p v-else class="flex-1">Could not load the note.</p>

    <AskAiPanel id="ask-ai" class="lg:w-96" />
  </div>
</template>
