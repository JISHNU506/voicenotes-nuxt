<template>
  <div class="min-h-screen bg-white text-ink lg:flex">
    <div class="flex-1 px-4 py-5 sm:px-8">
      <header class="flex items-center justify-between">
        <AppLogo />
        <NoteNavigation />
      </header>

      <main class="mx-auto mt-6 max-w-note">
        <slot />
      </main>
    </div>

    <div id="ask-ai" class="px-4 pb-4 lg:sticky lg:top-0 lg:h-screen lg:w-panel lg:shrink-0 lg:p-3">
      <AskAiPanel />
    </div>
  </div>
</template>
