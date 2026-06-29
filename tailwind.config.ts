import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        secondary: '#FF851B',
        'on-primary': '#ffffff',
        'on-secondary': '#000000',
        background: '#f7fafc',
        surface: '#ffffff',
        'surface-container': '#ebeef0',
        'surface-container-low': '#f1f4f6',
        'surface-container-high': '#e5e9eb',
        'surface-variant': '#e0e3e5',
        'on-surface': '#181c1e',
        'on-surface-variant': '#43474e',
        outline: '#74777f',
        'deep-onyx': '#001226',
        'charcoal-steel': '#2d3133',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        franklin: ['Libre Franklin', 'sans-serif'],
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'margin-desktop': '40px',
        'margin-mobile': '16px',
        gutter: '24px',
        'stack-lg': '48px',
        'stack-md': '24px',
        'stack-sm': '12px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '0.125rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}

export default config