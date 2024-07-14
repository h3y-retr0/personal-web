/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      Background: '#050505',
      Primary: '#8B8D8F',
      Secondary: '#343434',
      'Secondary-Dark': '#0E0E0E',
      'Text-Custom': '#BBBBBB',
      'White-Custom': '#FAFAFA',
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
