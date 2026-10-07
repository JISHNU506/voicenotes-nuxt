<script setup>
defineProps(['note'])
</script>

<template>
  <article>
    <h1 class="text-title font-semibold">{{ note.title }}</h1>

    <div class="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-system text-label font-medium">
      <BaseAvatar :src="note.authorImage" :alt="note.author" size="sm">{{ note.author.charAt(0) }}</BaseAvatar>
      <span class="text-black">{{ note.author }}</span>
      <span class="ml-2 text-muted">{{ note.date }}</span>
    </div>

    <p class="mt-3 text-body" v-html="note.transcript" />
  </article>
</template>
