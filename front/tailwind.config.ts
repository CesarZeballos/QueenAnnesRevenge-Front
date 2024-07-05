import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3E3C4",
        lightBrown: "#736758",
        darkBrown: "#50412E",
        lightBoard: "#A51B17",
        darkBoard: "#841612",
        lightBeige: "#E8CEA6",
        darkBeige: "#D1B995"
      },

      fontFamily: {
        kalam: ["Kalam", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      },

      fontSize: {
        'small': '1rem',
        'medium': '2rem',
        'large': '2.5rem'
      },

      spacing: {
        'small': '1rem',
        'medium': '3.5rem',
        'large': '7.5rem'
      },
      
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
