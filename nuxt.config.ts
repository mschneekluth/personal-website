export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
})
