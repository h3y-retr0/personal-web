/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      Background: '#050505',
      BackgroundLight: '#FFFFFF',
      Primary: '#8B8D8F',
      Secondary: '#343434',
      'Secondary-Dark': '#0E0E0E',
      'Text-Custom': '#BBBBBB',
      'Text-Custom-Light': '#555555',
      'White-Custom': '#FAFAFA',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'border-width': {
          from: { width: '10px', opacity: '0' },
          to: { width: '100px', opacity: '1' },
        },
        'push-word': {
          from: {},
        },
      },
      animation: {
        'border-width': 'border-width 3s alternate infinite',
        'push-word': 'transform 0.3s ease-in-out 0s',
      },
    },
  },
  plugins: [],
}
