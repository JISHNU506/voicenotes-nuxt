<script setup>
defineProps(['note'])
</script>

<template>
  <article>
    <h1 class="text-2xl font-semibold tracking-tight">{{ note.title }}</h1>

    <div class="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
      <BaseAvatar :src="note.authorImage" :alt="note.author" size="sm">{{ note.author.charAt(0) }}</BaseAvatar>
      <span class="font-medium">{{ note.author }}</span>
      <span class="ml-2 text-neutral-500">{{ note.date }}</span>
    </div>

    <p class="mt-4 text-[15px] leading-7 text-neutral-800" v-html="note.transcript" />
  </article>
</template>
