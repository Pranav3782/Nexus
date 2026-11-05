/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0B0D',
          950: '#07080A',
          900: '#0A0B0D',
          800: '#111316',
          700: '#181B1F',
          600: '#24282D',
        },
        bone: {
          DEFAULT: '#F3F1EA',
          50: '#FBFAF6',
          100: '#F3F1EA',
          200: '#EAE7DE',
          300: '#DEDACE',
          400: '#C9C4B4',
        },
        lime: {
          DEFAULT: '#D8FF57',
          300: '#E9FF9C',
          400: '#D8FF57',
          500: '#C4EE38',
          600: '#A4CC1D',
        },
        muted: '#6B6A61',
      },
      letterSpacing: {
        tightest: '-0.055em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10, 11, 13, 0.04), 0 12px 40px -12px rgba(10, 11, 13, 0.12)',
        lift: '0 2px 4px rgba(10, 11, 13, 0.04), 0 30px 80px -24px rgba(10, 11, 13, 0.28)',
        panel: '0 40px 120px -40px rgba(0, 0, 0, 0.65)',
        glow: '0 0 80px rgba(216, 255, 87, 0.16)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(0.82)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        'spin-slow': 'spin-slow 44s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
