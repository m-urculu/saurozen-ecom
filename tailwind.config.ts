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
        'xsm': '480px', // Custom breakpoint for extra small
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        designer: ['Designer', 'sans-serif'],
      },
      textShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'custom2': '0 4px 4px rgba(19, 8, 35, 0.4)'
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'custom2': '0 4px 4px rgba(19, 8, 35, 0.4)',
      },
      colors: {
        'Limerick': '#9DC913',
        'Cetacean-Blue': '#160233',
        'Bright-Gray': '#EEEDF7',
        'Ateneo-Blue': '#0A4164',
        'Limerick': '#9DC913',
        'Bittersweet-Shimmer': '#C05459',
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
