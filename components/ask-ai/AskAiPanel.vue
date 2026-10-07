<script setup>
const messages = [
  { id: 1, text: "Hi there! I'm VoicenotesAI. I can answer questions, pull quotes, or help draft emails from this meeting." },
]

const suggestions = ['List main points', 'Create meeting report']

const draft = ref('')

defineEmits(['close'])
</script>

<template>
  <aside class="flex h-full flex-col rounded-2xl bg-panel p-4">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-semibold">Ask AI</h2>

      <BaseButton variant="ghost" size="icon" aria-label="Close Ask AI" class="lg:hidden" @click="$emit('close')">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </BaseButton>
    </div>

    <div class="mt-4 flex-1 space-y-4 overflow-y-auto">
      <AskAiMessage
        v-for="message in messages"
        :key="message.id"
        :text="message.text"
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-3">
      <BaseButton
        v-for="suggestion in suggestions"
        :key="suggestion"
        @click="draft = suggestion"
      >
        {{ suggestion }}
      </BaseButton>
    </div>

    <AskAiInput v-model="draft" class="mt-2" />
  </aside>
</template>
