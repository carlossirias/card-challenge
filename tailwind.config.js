/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bold-purple': '#883AE1',
        'light-purple': '#E6D6FC',
        'bone': '#fafaf9',
        'grayish-blue':'#20293A',
        'gray-card': '#6C727F'
      },
      boxShadow: {
        'card': '0px 30px 100px 0px rgba(17, 23, 41, 0.05)',
      }
    },
  },
  plugins: [],
}

