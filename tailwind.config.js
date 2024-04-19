/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "instrument-serif": ["Instrument Serif", "serif"],
      },
      backgroundImage: (theme) => ({
        squiggle: "url('https://snippets.alexandru.so/squiggle.svg')",
      }),
    },
  },
  plugins: [],
};
