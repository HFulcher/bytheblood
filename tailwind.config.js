module.exports = {
  theme: {
    extend: {
      colors: {
        "brand-background": '#e3dbcd',
        "brand-foreground": '#595161',
        "brand-accent1": '#876065',
        'brand-accent2': '#b57069',
        'brand-accent3': '#e4806e'
      },
    },

    fontFamily: {
      "brand": "Libre Baskerville",
      "body": "Open Sans"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
