<script setup>
const { variant = 'soft', size = 'md' } = defineProps(['variant', 'size'])

const variants = {
  soft: 'bg-black/5 hover:bg-black/10',
  ghost: 'text-neutral-500 hover:bg-black/5 hover:text-neutral-900',
  solid: 'bg-black text-white hover:bg-neutral-700',
}

const sizes = {
  md: 'gap-2.5 px-3 py-2 text-label font-semibold text-black',
  icon: 'h-6 w-6',
  large: 'h-12 w-12',
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-full transition-colors"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
  </button>
</template>
