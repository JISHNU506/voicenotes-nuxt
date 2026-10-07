<script setup>
defineProps(['text'])
</script>

<template>
  <div class="flex items-start gap-2">
    <BaseAvatar>
      <IconLogo class="h-5 w-5" />
    </BaseAvatar>
    <p class="rounded-xl bg-black/5 px-3 py-2 text-sm leading-6">{{ text }}</p>
  </div>
</template>
