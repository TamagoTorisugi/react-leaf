/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
	'112': '28rem',
        '128': '32rem',
	'160': '40rem',
      }
    },
  },
  plugins: [],
}

