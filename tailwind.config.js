/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

