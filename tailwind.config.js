/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        copy: "SharpGrotesk-Book, serif",
        emphasis: "SharpGrotesk-Medium-Narrow, serif",
        header: "SharpGrotesk-Bold, serif",
      },
    },
  },
  plugins: [],
}
