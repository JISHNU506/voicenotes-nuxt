<script setup>
defineProps({
  text: { type: String, required: true },
})
</script>

<template>
  <div class="flex gap-2">
    <BaseAvatar>
      <IconLogo class="h-4 w-4" />
    </BaseAvatar>
    <p>{{ text }}</p>
  </div>
</template>
