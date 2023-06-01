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
        "carlos--80": "#eff0fe",
        "carlos--65": "#e8e8fd",
        "carlos--60": "#e0e0fc",
        "carlos--55": "#d8d9fc",
        "carlos--35": "#d0d1fb",
        "carlos--30": "#c8c9fa",
        "carlos-0": "#9a9cf6",
        "carlos-5": "#b1b3f8",
        "carlos-10": "#a9abf7",
        "carlos-15": "#9a9cf6",
        "carlos-55": "#3b3d91",
        "carlos-60": "#323379",
        "carlos-65": "#282960",
        "carlos-80": "#141430",
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
