<script setup>
defineProps({
  color: { type: String, default: 'neutral' }, // neutral | accent
})

const colors = {
  neutral: 'bg-surface-muted text-ink-muted',
  accent: 'bg-accent-soft text-accent',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="colors[color]"
  >
    <slot />
  </span>
</template>
