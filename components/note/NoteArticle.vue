<script setup>
defineProps(['note'])
</script>

<template>
  <article>
    <h1 class="text-title font-semibold">{{ note.title }}</h1>

    <div class="mt-3 flex items-center gap-3 font-system">
      <BaseAvatar :src="note.authorImage" :alt="note.author">{{ note.author.charAt(0) }}</BaseAvatar>

      <div>
        <p class="text-label font-medium text-black">{{ note.author }}</p>
        <p class="mt-0.5 text-xs text-muted">{{ note.date }}</p>
      </div>
    </div>

    <p class="mt-4 text-body" v-html="note.transcript" />
  </article>
</template>
