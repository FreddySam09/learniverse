/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    
      },
      colors: {
        light: '#EFEFEF',
        dark: '#1C1C1C',
        darkpurple: '#381151',
        purple: '#8258B1',
      },
      
    },
  },
  plugins: [],
}

