/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0f1923',
          mid:    '#1a2e42',
          light:  '#2d4357',
          muted:  '#4a5e72',
        },
        cream: {
          DEFAULT: '#faf5ed',
          dark:    '#f0e6d3',
          darker:  '#e4d3b8',
        },
        sienna: {
          DEFAULT: '#bf4b26',
          light:   '#d4652f',
          dark:    '#9a3a1c',
          pale:    '#fbe8e1',
        },
        gold: {
          DEFAULT: '#c4882b',
          light:   '#d9a348',
          dark:    '#9e6c1f',
          pale:    '#fdf3e0',
        },
        slate: {
          DEFAULT: '#4a5e72',
          light:   '#7a8fa3',
          lighter: '#a8bac8',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Barlow', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 2px 16px -2px rgba(15,25,35,0.10)',
        'card-lg':  '0 12px 48px -8px rgba(15,25,35,0.18)',
        sienna:     '0 8px 32px -4px rgba(191,75,38,0.35)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
