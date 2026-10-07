<script setup>
defineProps({
  // Icon-only buttons have no visible text, so screen readers need a label.
  label: { type: String, required: true },
  size: { type: String, default: 'md' }, // sm | md
})

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
}
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    :title="label"
    class="inline-flex shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink disabled:pointer-events-none disabled:opacity-50"
    :class="sizes[size]"
  >
    <slot />
  </button>
</template>
