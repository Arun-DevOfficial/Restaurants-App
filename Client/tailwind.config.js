/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
        title: ["Caveat", "cursive"],
        offer: ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
