<script setup>
// defineProps is like typing a React component's props, but it also sets defaults.
// No import needed: Nuxt auto-imports Vue macros, and auto-registers this file as <BaseButton>.
defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost
  size: { type: String, default: 'md' }, // sm | md
  type: { type: String, default: 'button' }, // pass "submit" inside forms
  block: { type: Boolean, default: false }, // full width
})

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'border border-line bg-surface text-ink hover:bg-surface-muted',
  ghost: 'text-ink-muted hover:bg-surface-muted hover:text-ink',
}

const sizes = {
  sm: 'h-8 gap-1.5 px-3 text-sm',
  md: 'h-10 gap-2 px-4 text-sm',
}
</script>

<template>
  <!--
    Attributes you don't declare as props (@click, disabled, aria-*) are passed
    to this root <button> automatically — no need for {...rest} like in React.
  -->
  <button
    :type="type"
    class="inline-flex items-center justify-center rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
    :class="[variants[variant], sizes[size], { 'w-full': block }]"
  >
    <!-- <slot /> is Vue's version of {children} -->
    <slot />
  </button>
</template>
