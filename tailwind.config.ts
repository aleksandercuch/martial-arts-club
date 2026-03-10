import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "front-bg": "url('/bg.jpg')",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        lato: ["var(--font-lato)", "ui-sans-serif", "system-ui"],
        trajan: ['"trajan-sans-pro"', "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
