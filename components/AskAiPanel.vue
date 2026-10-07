<script setup>
const messages = [
  { id: 1, text: "Hi there! I'm VoicenotesAI. I can answer questions, pull quotes, or help draft emails from this meeting." },
]

const suggestions = ['List main points', 'Create meeting report']

// ref() is Vue's useState — v-model on the textarea keeps it in sync
const draft = ref('')
</script>

<template>
  <section class="border p-4">
    <h2 class="font-bold">Ask AI</h2>

    <div v-for="message in messages" :key="message.id" class="mt-4 flex gap-2">
      <BaseAvatar>
        <AppLogoMark class="h-4 w-4" />
      </BaseAvatar>
      <p>{{ message.text }}</p>
    </div>

    <div class="mt-4 flex gap-2">
      <BaseButton v-for="suggestion in suggestions" :key="suggestion" @click="draft = suggestion">
        {{ suggestion }}
      </BaseButton>
    </div>

    <textarea v-model="draft" rows="2" placeholder="Enter your change" class="mt-4 w-full border p-2" />

    <div class="flex justify-end gap-2">
      <BaseIconButton label="Record voice">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
        </svg>
      </BaseIconButton>
      <BaseIconButton label="Send">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </BaseIconButton>
    </div>
  </section>
</template>
