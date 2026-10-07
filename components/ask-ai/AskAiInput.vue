<script setup>
const message = defineModel()
</script>

<template>
  <div class="flex h-20 flex-col rounded-2xl bg-white p-3 shadow-input">
    <textarea
      v-model="message"
      rows="1"
      placeholder="Enter your change"
      class="flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-black/40"
    />

    <div class="flex justify-end gap-2">
      <BaseButton size="icon" aria-label="Record voice">
        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
        </svg>
      </BaseButton>
      <BaseButton variant="solid" size="icon" aria-label="Send">
        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </BaseButton>
    </div>
  </div>
</template>
