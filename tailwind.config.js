import bg from '../react-navbar-assignment/src/assets/bg.svg';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'logoFont': ['"Playwrite MX"', 'cursive'],
      //  'poppins': ['"Poppins"', 'sans-serif'],
      'poppins':"'Poppins',serif"
      },
      boxShadow: {
        'text-violet': '2px 2px 5px rgba(138, 43, 226, 0.5)', // Customize the shadow here
      },
      backgroundImage:{
        'hero-image':'url("https://i.ibb.co/R9k3xqm/layer.png")'
      },
    },
  },
    //...
    plugins: [
      require('daisyui'),
      function ({ addUtilities }) {
        const newUtilities = {
          '.text-shadow-violet': {
            textShadow: '5px 2px 5px yellow', // Customize the shadow here
          },
          '.text-shadow-red': {
            textShadow: '5px 2px 5px red', // Customize the shadow here
          },
        }
        addUtilities(newUtilities, ['responsive', 'hover']);
      },
    ],
}


