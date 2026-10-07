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
      <BaseIconButton label="Record voice">
        <IconMic class="h-4 w-4" />
      </BaseIconButton>
      <BaseIconButton label="Send">
        <IconArrowUp class="h-4 w-4" />
      </BaseIconButton>
    </div>
  </div>
</template>
