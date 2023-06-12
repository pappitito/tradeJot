/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '430px',    // Custom extra small screen size
        'sm': '640px',    // Custom small screen size
        'md': '768px',    // Custom medium screen size
        'lg': '1024px',   // Custom large screen size
        'xl': '1280px',   // Custom extra large screen size
        '2xl': '1536px',  // Custom 2x extra large screen size
      }
    },
  },
  plugins: [],
}

