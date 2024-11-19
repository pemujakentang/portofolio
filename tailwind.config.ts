import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-primary": "#f4ece4",
        "light-secondary": "#414040",
        "light-tertiary": "#1c1c1c",
        "light-accent": "#1ca4a0",
        "dark-primary": "#0c101f",
        "dark-secondary": "#bcbdbd",
        "dark-tertiary": "#dddddd",
        "dark-accent": "#dd5c60",
        "retro-brown": "#6f5643",
        "retro-orange": "#cc6b49",
        "retro-yellow": "#d2a24c",
        "retro-offwhite": "#ece6c2",
        "retro-blue": "#73bda8",
        "retro-darkred": "#4c2215",
        "retro-bloodred": "#981d26",
        "retro-red": "#e03c30",
        "retro-brightyellow": "#e5a632",
        "retro-secondarywhite": "#f2eac5",
      },
      fontFamily: {
        badmofo: ["BadMofo"],
        bebasneue: ["BebasNeueRegular"],
        hemihead: ["HemiHead"],
        mexcellent3d: ["Mexcellent3D"],
        mexcellent: ["Mexcellent"],
        ricksamerican: ["RicksAmerican"],
        righteous: ["Righteous"],
        "built-titling": ['"Built Titling"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
