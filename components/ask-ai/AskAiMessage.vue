<script setup>
defineProps(['text'])
</script>

<template>
  <div class="flex items-start gap-3">
    <UAvatar size="lg" class="bg-white ring ring-neutral-200">
      <IconLogo class="h-4 w-4" />
    </UAvatar>
    <p class="rounded-2xl bg-neutral-200 px-3 py-2 text-sm leading-6">{{ text }}</p>
  </div>
</template>
