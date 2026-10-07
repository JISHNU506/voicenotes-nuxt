<script setup>
const { variant = 'soft' } = defineProps(['variant'])

const variants = {
  soft: 'bg-neutral-200 px-3 py-1.5 text-sm font-medium hover:bg-neutral-300',
  ghost: 'p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900',
  solid: 'bg-black p-1.5 text-white hover:bg-neutral-700',
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-full transition-colors"
    :class="variants[variant]"
  >
    <slot />
  </button>
</template>
