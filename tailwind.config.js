//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components.{js,jsx,ts,tsx}",
    "./src/Pages.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem", // Tambahkan koma di sini agar benar
        },
      },
    },
  },
  plugins: [],
};
