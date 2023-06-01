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
        "carlos--80": "#f0ebfe",
        "carlos--65": "#e5dcfe",
        "carlos--60": "#e1d7fd",
        "carlos--55": "#ddd2fd",
        "carlos--35": "#cebffc",
        "carlos--30": "#cbbafc",
        "carlos-0": "#b49cfb",
        "carlos-5": "#ab94ee",
        "carlos-10": "#a28ce2",
        "carlos-15": "#9985d5",
        "carlos-55": "#514671",
        "carlos-60": "#483e64",
        "carlos-65": "#3f3758",
        "carlos-80": "#211C32",
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
