<script setup>
// ref() is Vue's useState. Read/write it as `question.value` in <script>;
// in the template Vue unwraps it, so it's just `question`.
const question = ref('')
</script>

<template>
  <main class="mx-auto max-w-2xl space-y-10 px-4 py-8 text-ink sm:px-8">
    <header>
      <h1 class="text-2xl font-semibold">Base components</h1>
      <p class="text-sm text-ink-muted">Every reusable building block, in one place.</p>
    </header>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-ink-subtle">BaseButton</h2>
      <div class="flex flex-wrap items-center gap-3">
        <BaseButton>Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton disabled>Disabled</BaseButton>
      </div>
      <BaseButton block variant="secondary">Full width (block)</BaseButton>
    </section>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-ink-subtle">BaseIconButton</h2>
      <div class="flex items-center gap-2">
        <BaseIconButton label="More options">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
          </svg>
        </BaseIconButton>
        <BaseIconButton label="Back" size="sm">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </BaseIconButton>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-ink-subtle">BaseInput</h2>
      <BaseInput v-model="question" label="Ask AI" placeholder="Ask anything about this note…" />
      <p class="text-sm text-ink-muted">You typed: {{ question || '—' }}</p>
    </section>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-ink-subtle">BaseTag</h2>
      <div class="flex flex-wrap gap-2">
        <BaseTag>#meeting</BaseTag>
        <BaseTag>#ideas</BaseTag>
        <BaseTag color="accent">AI summary</BaseTag>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-ink-subtle">BaseCard</h2>
      <BaseCard>
        <template #header>
          <p class="font-medium">Card header</p>
        </template>
        <p class="text-sm text-ink-muted">Body content goes in the default slot.</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <BaseButton variant="ghost" size="sm">Cancel</BaseButton>
            <BaseButton size="sm">Save</BaseButton>
          </div>
        </template>
      </BaseCard>
      <BaseCard>
        <p class="text-sm text-ink-muted">A card with no header or footer.</p>
      </BaseCard>
    </section>
  </main>
</template>
