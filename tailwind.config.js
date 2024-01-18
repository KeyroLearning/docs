/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      primary: '#AA4693',
      indigo: '#473C90',
      'dark-blue': '#333AAA',
      'ultra-dark-blue': '#0C162F',
      blue: '#4070F5',
      'medium-blue': '#E0E8FF',
      'baby-blue': '#97D0F2',
      grey: '#636975',
      'light-grey': '#DCE5ED',
      'ultra-light-grey': '#F5F6FA',
      'medium-majenta': '#EBBAE0'
    },
    fontFamily: {
      fira: ['Fira Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
