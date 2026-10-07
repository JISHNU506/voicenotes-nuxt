<script setup>
// The root element here is <label>, but extra attributes (type, @keydown, autofocus)
// belong on the <input>. Turn off auto-forwarding and bind $attrs manually below —
// the same idea as spreading {...rest} onto an inner element in React.
defineOptions({ inheritAttrs: false })

// defineModel makes v-model work on this component.
// React equivalent: a value prop plus an onChange prop, wired up in one line.
const model = defineModel({ type: String, default: '' })

defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
})
</script>

<template>
  <label class="block">
    <span v-if="label" class="mb-1.5 block text-sm font-medium text-ink">{{ label }}</span>
    <input
      v-model="model"
      v-bind="$attrs"
      :placeholder="placeholder"
      class="h-10 w-full rounded-xl border border-line bg-surface px-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
    >
  </label>
</template>
J