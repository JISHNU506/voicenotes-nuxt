<script setup>
defineProps({
  // Icon-only buttons have no visible text, so screen readers need a label
  label: { type: String, required: true },
})
</script>

<template>
  <button type="button" :aria-label="label" :title="label" class="border p-1">
    <slot />
  </button>
</template>
