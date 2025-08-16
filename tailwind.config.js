/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {},
  },
  safelist: [{ pattern: /^col-span-[1-3]$/ }, { pattern: /^row-span-[1-3]$/ }],
}
