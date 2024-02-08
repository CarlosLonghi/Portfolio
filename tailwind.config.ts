import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      maxWidth: {
        app: '58rem',
      },
    },
  },
  plugins: [],
}
export default config
