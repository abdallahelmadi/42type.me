import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'md': '849px',
      'lg': '1106px',
      'xl': '1362px',
      '2xl': '1617px'
    },
    extend: {}
  },
  plugins: []
} satisfies Config