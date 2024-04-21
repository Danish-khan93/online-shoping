/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      BG: "#ffffff",
      Secondary2: "#DB4444",
      Secondary: "#F5F5F5",

      TEXT1: "#000000",
      TEXT2: "#7D8184",
    },
fontSize:{
para: "1rem",

},
    extend: {},
  },
  plugins: [],
};
