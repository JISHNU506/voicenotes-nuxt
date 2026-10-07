<script setup>
// defineProps = the props your component accepts (like typing props in React), with defaults
defineProps({
  type: { type: String, default: 'button' },
})
</script>

<template>
  <!-- @click, disabled, etc. are passed to this <button> automatically — no {...rest} needed -->
  <button :type="type" class="border px-3 py-1">
    <!-- <slot /> is Vue's {children} -->
    <slot />
  </button>
</template>
