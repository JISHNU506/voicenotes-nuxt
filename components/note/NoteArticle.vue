<script setup>
defineProps(['note'])
</script>

<template>
  <article>
    <h1 class="text-2xl font-bold">{{ note.title }}</h1>

    <div class="flex items-center gap-2">
      <BaseAvatar :src="note.authorImage" :alt="note.author">{{ note.author.charAt(0) }}</BaseAvatar>
      <span>{{ note.author }}</span>
      <span>{{ note.date }}</span>
    </div>

    <p class="mt-4">{{ note.transcript }}</p>
  </article>
</template>
