import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#00d4aa',
        surface: '#0a1628',
        card: '#0f1f35',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-lg': '30px 30px',
      },
      animation: {
        'float-slow': 'float-orb 20s ease-in-out infinite',
        'float-medium': 'float-orb 25s ease-in-out infinite reverse',
        'float-fast': 'float-orb 30s ease-in-out infinite 5s',
      },
      keyframes: {
        'float-orb': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(40px, -40px) scale(1.1)', opacity: '0.8' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config
