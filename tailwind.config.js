/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        copy: "ITCGaramondStdLightNarrow, serif",
        ["copy-emphasis"]: "ITCGaramondStdBookNarrowItalic, serif",
      },
      colors: {
        "carlos--80": "#f0f1f3",
        "carlos--65": "#e8eaee",
        "carlos--60": "#e0e3e8",
        "carlos--55": "#d8dce2",
        "carlos--35": "#d1d5dc",
        "carlos--30": "#c9ced6",
        "carlos-0": "#b2bac5",
        "carlos-5": "#a2acb9",
        "carlos-10": "#939eae",
        "carlos-15": "#8b97a8",
        "carlos-20": "#8390a2",
        "carlos-30": "#556376",
        "carlos-40": "#4b5768",
        "carlos-55": "#3c4653",
        "carlos-60": "#323a46",
        "carlos-65": "#282e38",
        "carlos-80": "#1e232a",
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
