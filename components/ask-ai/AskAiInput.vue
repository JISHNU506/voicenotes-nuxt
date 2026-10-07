<script setup>
const message = defineModel()
</script>

<template>
  <div class="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
    <textarea
      v-model="message"
      placeholder="Enter your change"
      class="w-full resize-none bg-transparent text-sm outline-none placeholder:text-neutral-400"
    />

    <div class="flex justify-end gap-2">
      <UButton icon="i-lucide-mic" color="neutral" variant="ghost" size="sm" aria-label="Record voice" />
      <UButton icon="i-lucide-arrow-up" color="neutral" size="sm" aria-label="Send" />
    </div>
  </div>
</template>
