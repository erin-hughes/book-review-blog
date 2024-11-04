import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ebGaramond: ['"EB Garamond"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translate(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
