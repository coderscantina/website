// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import locales from './i18n.locales'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@storyblok/nuxt',
    '@vueuse/nuxt',
    'nuxt-schema-org',
  ],

  app: {
    head: {
      templateParams: {
        site: {
          name: 'Coder\'s Cantina',
        },
      },
      meta: [
        {
          name: 'theme-color',
          content: '#ff1744',
        },
        {
          name: 'author',
          content: '%site.name',
        },
        {
          property: 'og:site_name',
          content: '%site.name',
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon-96x96.png'
        },
        {
          rel: 'icon',
          type: 'image/svg-xml',
          href: '/favicon.svg'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
      ]
    },
  },

  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN,
  },

  runtimeConfig: {
    public: {
      appEnv: process.env.NUXT_PUBLIC_APP_ENV,
    }
  },

  tailwindcss: {
    cssPath: '~/assets/scss/main.scss'
  },

  nitro: {
    logLevel: 1,
    inlineDynamicImports: true,
  },

  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  // customize default plugin options
                  inlineStyles: {
                    onlyMatchedOnce: false,
                  },
                  removeViewBox: false,
                  convertShapeToPath: false,
                  mergePaths: false,
                },
              },
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: 'data-name',
              },
            },
            {
              name: 'convertStyleToAttrs',
            },
          ],
        },
      }),
    ],
  },

  i18n: {
    strategy: 'prefix',
    detectBrowserLanguage: {
      redirectOn: 'no prefix'
    },
    locales,
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: 'lang'
  },

  devtools: { enabled: true }
})
