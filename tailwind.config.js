module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
    },
    extend: {
      gridTemplateRows: {
        layout: '100px 1fr min-content',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
