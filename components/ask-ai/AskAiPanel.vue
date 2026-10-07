<script setup>
const messages = [
  { id: 1, text: "Hi there! I'm VoicenotesAI. I can answer questions, pull quotes, or help draft emails from this meeting." },
]

const suggestions = ['List main points', 'Create meeting report']

const draft = ref('')
</script>

<template>
  <aside class="flex h-full flex-col rounded-2xl bg-panel p-4">
    <h2 class="text-sm font-semibold">Ask AI</h2>

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
