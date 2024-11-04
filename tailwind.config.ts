import type { Config } from "tailwindcss";
import textShadow from 'tailwindcss-textshadow'; 

const config: Config = {  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxsm': '400px',
        'xsm': '480px'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        designer: ['Designer', 'sans-serif'],
        o210ital: ['o210ital', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      textShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'custom2': '0 4px 4px rgba(19, 8, 35, 0.4)',
        'customblack': '2px 3px 2px rgba(0, 0, 0, 1)',
        'custom-white': '2px 2px 3px rgba(255, 255, 255, 0.4)',
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'custom2': '0 4px 4px rgba(19, 8, 35, 0.4)',
        'custom3': 'inset 0 0 0 2px rgba(10, 65, 100, 0.15)',
      },
      dropShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',  // Customize your drop shadow here
      },
      colors: {
        'Limerick': '#9DC913',
        'Cetacean-Blue': '#160233',
        'Bright-Gray': '#EEEDF7',
        'Ateneo-Blue': '#0A4164',
        'Bittersweet-Shimmer': '#C05459',
        'Light-Pink': '#FFBEC1',
        'Dark-Sky-Blue': '#8BBDE3',
        'Chinese-Silver': '#C7C7C7',
        'eerie-black-85': '#1D1B20D9',
        'Light-Steel-Blue': '#ACCADC'
      },
    },
  },
  plugins: [
    textShadow,
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
      }, ['responsive', 'hover']);
    },
  ],
};
export default config;
