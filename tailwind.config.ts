import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(16rem, 20rem) 1fr',
      },
      maxWidth: {
        app: '42rem',
      },
      colors: {
        purple: '#8257e6',
      },
    },
  },
  plugins: [],
}
export default config
