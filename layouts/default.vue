<template>
  <div class="min-h-screen bg-white text-neutral-900 lg:flex">
    <div class="flex-1 px-4 py-5 sm:px-8">
      <header class="flex items-center justify-between">
        <AppLogo />
        <NoteNavigation />
      </header>

      <main class="mx-auto mt-10 max-w-xl">
        <slot />
      </main>
    </div>

    <div id="ask-ai" class="h-[600px] px-4 pb-4 lg:sticky lg:top-0 lg:h-screen lg:w-[420px] lg:shrink-0 lg:p-2">
      <AskAiPanel />
    </div>
  </div>
</template>
