/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#16161a',
        headline: '#fffffe',
        paragraph: '#94a1b2',
        button: '#7f5af0',
        'button-text': '#fffffe',
        stroke: '#010101',
        main: '#fffffe',
        highlight: '#7f5af0',
        secondary: '#72757e',
        tertiary: '#2cb67d',
      },
    },
  },
  plugins: [],
}

