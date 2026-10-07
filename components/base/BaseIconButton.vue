<script setup>
defineProps(['label'])
</script>

<template>
  <button type="button" :aria-label="label" :title="label" class="border p-1">
    <slot />
  </button>
</template>
