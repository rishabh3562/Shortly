// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// import bg from "./src/assets/images/bg-shorten-desktop.svg"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          'dark-violet': 'hsl(257, 27%, 26%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 75%)',
          'grayish-violet': 'hsl(257, 7%, 63%)',
          'very-dark-blue': 'hsl(255, 11%, 22%)',
          'very-dark-violet': 'hsl(260, 8%, 14%)',
        },
        bg:{
          gray1:'rgb(243, 243, 243)'
        }
      },
      fontSize: {
        '18px': '18px',
      },
      backgroundImage: {
        'hero-pattern': `url(./src/assets/images/bg-boost-desktop.svg)`,
        'footer-texture': "url(./src/assets/images/bg-boost-desktop.svg)",
      },
      minHeight: {
        'banner': '250px',
        'footer': '500px',
        'hero': '500px',
        'hero-mobile': '400px',
        'hero-tablet': '500px',
        'hero-desktop': '500px',
        'hero-desktop-lg': '500px',
        'hero-desktop-xl': '500px',
      },
      screens:{
        'tablet': '640px',
        'desktop': '1024px',
        'desktop-lg': '1280px',
        'desktop-xl': '1536px',
      'xs': '320px',
      }
      }
    },
  
  plugins: [],
};
