<script setup>
const message = defineModel()
</script>

<template>
  <div>
    <textarea
      v-model="message"
      placeholder="Enter your change"
      class="w-full border p-2"
    />

    <div class="flex justify-end gap-2">
      <BaseButton aria-label="Record voice">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
        </svg>
      </BaseButton>
      <BaseButton aria-label="Send">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </BaseButton>
    </div>
  </div>
</template>
