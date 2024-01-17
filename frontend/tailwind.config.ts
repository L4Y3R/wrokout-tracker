import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        bungee: ["Bungee Spice", "sans-serif"],
        dmsans: ["DM Sans", "sans"]
      }
    },
  },
  plugins: [],
}
export default config
