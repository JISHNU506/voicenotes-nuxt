<script setup>
const isAskAiOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white text-ink lg:flex">
    <div class="flex-1 px-4 pb-24 pt-5 sm:px-8 lg:pb-5">
      <header class="flex items-center justify-between">
        <AppLogo />
        <NoteNavigation />
      </header>

      <main class="mx-auto mt-6 max-w-note">
        <slot />
      </main>
    </div>

    <div
      class="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden"
      :class="isAskAiOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
      @click="isAskAiOpen = false"
    />

    <div
      id="ask-ai"
      class="fixed inset-x-0 bottom-0 z-50 h-5/6 p-2 transition-all duration-300 lg:sticky lg:inset-auto lg:top-0 lg:visible lg:h-screen lg:w-panel lg:shrink-0 lg:translate-y-0 lg:p-3"
      :class="isAskAiOpen ? 'visible translate-y-0' : 'invisible translate-y-full'"
    >
      <AskAiPanel @close="isAskAiOpen = false" />
    </div>

    <BaseButton
      variant="ghost"
      size="large"
      aria-label="Open Ask AI"
      class="fixed bottom-5 left-5 z-30 bg-white shadow-input lg:hidden"
      @click="isAskAiOpen = true"
    >
      <IconLogo class="h-6 w-6" />
    </BaseButton>
  </div>
</template>
