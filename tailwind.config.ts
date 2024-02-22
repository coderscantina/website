function rfsToClamp(fs: number, {
  rfsBase = 16,
  rfsBreakpoint = 1840,
  rfsFactor = 3,
} = {}) {
  const min = rfsBase + (Math.abs(fs) - rfsBase) / rfsFactor
  const diff = fs - min
  const varWidth = diff * 100 / rfsBreakpoint
  return `clamp(${min / 16}rem, calc(${min / 16}rem + ${varWidth}vw), ${fs / 16}rem)`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './storyblok/**/*.{js,vue,ts}',
    './assets/**/*.svg',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    colors: ({ colors }: { colors: any }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      red: {
        50: '#fff0f3',
        100: '#ffdde4',
        200: '#ffc0cc',
        300: '#ff94a9',
        400: '#ff5778',
        500: '#ff234e',
        600: '#ff1744',
        700: '#d7002a',
        800: '#b10325',
        900: '#920a24',
        950: '#500010',
      },
      teal: {
        50: '#e7fff9',
        100: '#c6ffee',
        200: '#92ffe4',
        300: '#4dffdb',
        400: '#1affd1',
        500: '#00e8b7',
        600: '#00be97',
        700: '#00987e',
        800: '#007865',
        900: '#006254',
        950: '#003831',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    }),
    extend: {
      typography: (theme: (value: string) => string) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.gray.500'),
            '--tw-prose-links': theme('colors.gray.500'),
            color: theme('colors.gray.500'),
            strong: {
              color: theme('colors.gray.500'),
              fontWeight: '700',
            },
            a: {
              color: theme('colors.gray.500'),
              fontWeight: '500',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.red.600'),
              },
            },
            hr: {
              borderColor: theme('colors.gray.300')
            },
            h1: {
              color: theme('colors.gray.100'),
              fontSize: rfsToClamp(32),
              lineHeight: 1.2,
              fontWeight: '600',
            },
            h2: {
              color: theme('colors.gray.200'),
              fontSize: rfsToClamp(24),
              lineHeight: 1.2,
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.gray.200'),
              fontSize: rfsToClamp(18),
              lineHeight: 1.7,
              fontWeight: '400',
            },
            h4: {
              color: theme('colors.gray.400'),
              fontWeight: '600',
              fontSize: `${0.75}rem`,
              textTransform: 'uppercase'
            },
            h5: {
              color: theme('colors.gray.500'),
              fontWeight: '400',
            },
            h6: {
              color: theme('colors.gray.500'),
              fontWeight: '400',
            },
          },
        },
      }),
    },
    hljs: {
      theme: 'atom-one-dark',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs')
  ],
}
