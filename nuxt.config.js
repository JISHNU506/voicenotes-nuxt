export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Voicenotes',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' },
      ],
    },
  },
})
