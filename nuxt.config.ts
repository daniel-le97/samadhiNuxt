// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    '@morev/vue-transitions/nuxt'
  ],

  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },

  typescript: {
    shim: false
  },

  devtools: true
  

})
