// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/hanko'],
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: 'Ui',
    },
    {
      path: '~/components/',
      extensions: ['.vue'],
      prefix: false,
    },
  ],
  hanko: {
    apiURL: process.env.HANKO_API_URL,
    cookieName: 'hanko',
    redirects: {
      login: '/login',
      success: '/',
      home: '/',
      followRedirect: true,
    },
  },
})
