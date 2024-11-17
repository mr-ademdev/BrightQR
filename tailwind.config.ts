import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '2xl':  {'max': '1535px'},
      'xl':   {'max': '1279px'},
      'lg':   {'max': '992px'},
      'md':   {'max': '772px'},
      'sm':   {'max': '420px'},
    },
    fontFamily: {
      titillium: ['Titillium Web', 'sans-serif'],
      zain: ['Zain', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'], // Ensuring focus variant is enabled for borderColor
      borderWidth: ['focus'], // Ensuring focus variant is enabled for borderWidth
      boxShadow: ['focus'], // Ensuring focus variant is enabled for boxShadow
      // Add other utilities you need focus variants for
    },
  },
  plugins: [],
};
export default config;