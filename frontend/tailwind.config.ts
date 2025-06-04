import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      colors: {
        "brand-primary": "#3490DC",
        
      },
    },
  },
  plugins: [],
}

export default config
