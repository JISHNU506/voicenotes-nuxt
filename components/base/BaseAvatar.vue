<script setup>
defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
})
</script>

<template>
  <span class="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border">
    <img v-if="src" :src="src" :alt="alt">
    <!-- No image? Show whatever the parent puts inside (initials, a logo) -->
    <slot v-else />
  </span>
</template>
