<script setup>
const messages = [
  { id: 1, text: "Hi there! I'm VoicenotesAI. I can answer questions, pull quotes, or help draft emails from this meeting." },
]

const suggestions = ['List main points', 'Create meeting report']

const draft = ref('')
</script>

<template>
  <aside class="border p-4">
    <h2 class="font-bold">Ask AI</h2>

    <AskAiMessage
      v-for="message in messages"
      :key="message.id"
      :text="message.text"
      class="mt-4"
    />

    <div class="mt-4 flex gap-2">
      <BaseButton
        v-for="suggestion in suggestions"
        :key="suggestion"
        @click="draft = suggestion"
      >
        {{ suggestion }}
      </BaseButton>
    </div>

    <AskAiInput v-model="draft" class="mt-4" />
  </aside>
</template>
