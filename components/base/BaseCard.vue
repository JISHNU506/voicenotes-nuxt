<!--
  Named slots: the parent fills them with <template #header> / <template #footer>.
  In React you'd pass these as props, e.g. <Card header={...} footer={...}>.
  $slots.header is only set when the parent actually provides that slot,
  so the wrapper divs below disappear when they're not used.
-->
<template>
  <div class="rounded-2xl border border-line bg-surface">
    <div v-if="$slots.header" class="border-b border-line px-4 py-3">
      <slot name="header" />
    </div>
    <div class="p-4">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-line px-4 py-3">
      <slot name="footer" />
    </div>
  </div>
</template>
