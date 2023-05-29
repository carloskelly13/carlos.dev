/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "narwhale-grey": "#05071b",
      },
      width: {
        content: "calc(50% + 1rem)",
      },
      aspectRatio: {
        "box-ratio": "5 / 4.25",
      },
    },
  },
  plugins: [],
}
