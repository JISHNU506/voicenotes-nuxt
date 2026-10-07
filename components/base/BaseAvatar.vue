<script setup>
const { src, alt, size = 'md' } = defineProps(['src', 'alt', 'size'])

const sizes = {
  sm: 'h-5 w-5 text-[10px]',
  md: 'h-9 w-9 text-sm',
}
</script>

<template>
  <span
    class="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white"
    :class="sizes[size]"
  >
    <img v-if="src" :src="src" :alt="alt" class="h-full w-full object-cover">
    <slot v-else />
  </span>
</template>
