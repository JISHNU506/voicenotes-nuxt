<script setup>
defineProps(['src', 'alt'])
</script>

<template>
  <span class="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border">
    <img v-if="src" :src="src" :alt="alt">
    <slot v-else />
  </span>
</template>
