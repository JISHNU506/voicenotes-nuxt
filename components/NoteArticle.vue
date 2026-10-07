<script setup>
defineProps({
  note: { type: Object, required: true }, // { title, author, date, paragraphs }
})
</script>

<template>
  <article>
    <h1 class="text-2xl font-bold">{{ note.title }}</h1>

    <div class="flex items-center gap-2">
      <BaseAvatar>{{ note.author.charAt(0) }}</BaseAvatar>
      <span>{{ note.author }}</span>
      <span>{{ note.date }}</span>
    </div>

    <!-- v-for is Vue's .map(), and :key works like React's key -->
    <p v-for="(paragraph, index) in note.paragraphs" :key="index" class="mt-4">
      {{ paragraph }}
    </p>
  </article>
</template>
