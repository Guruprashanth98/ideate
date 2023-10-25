// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/hanko',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/code-block.css', '~/assets/css/textarea.css'],
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: 'Ui',
    },
    {
      path: '~/components',
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
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/ideate-logo-light-thin.png' },
      ],
    },
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
})
