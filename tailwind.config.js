import bg from '../react-navbar-assignment/src/assets/bg.svg';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode:false,
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
        'hero-image':'url("https://i.ibb.co/0hvgN2X/Sprinkle.png")',
        'hero-image2':'url("https://i.ibb.co/WgkSQHW/Polygon-Luminary.png")',
        'support-image':'url("https://nhb-verse-voyage.vercel.app/assets/contact-AWgNooiJ.png")',
        'feature-image':'url("https://i.ibb.co/GVdCBYj/Meteor-1.png")',
        'assignment-image':'url("https://i.ibb.co/F71vf2J/view-3d-school-desk.jpg")'
      },
      colors: {
        'theme-light': {
          primary: '#3490dc',
          secondary: '#6cb2eb',
          // Define other theme-light colors
        },
        'theme-dark': {
          primary: '#4a5568',
          secondary: '#718096',
          // Define other theme-dark colors
        },
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


