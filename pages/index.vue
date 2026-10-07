<script setup>
import { note } from '~/data/note.js'
</script>

<template>
  <div class="flex flex-col gap-4 lg:flex-row">
    <NoteArticle :note="note" class="flex-1" />
    <AskAiPanel id="ask-ai" class="lg:w-96" />
  </div>
</template>
