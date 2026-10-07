<template>
  <div class="min-h-screen p-4">
    <header class="flex items-center justify-between">
      <AppLogo />
      <NoteNavigation />
    </header>

    <main class="mt-8">
      <slot />
    </main>
  </div>
</template>
