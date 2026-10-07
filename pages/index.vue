<script setup>
// Components are auto-imported, but data/ isn't a Nuxt folder, so it needs a normal import (~ = project root)
import { note } from '~/data/note.js'
</script>

<template>
  <div class="flex flex-col gap-4 p-4 lg:flex-row">
    <main class="flex-1">
      <AppLogo />
      <NoteArticle :note="note" class="mt-8" />
    </main>

    <aside id="ask-ai" class="lg:w-96">
      <AskAiPanel />
    </aside>
  </div>
</template>
