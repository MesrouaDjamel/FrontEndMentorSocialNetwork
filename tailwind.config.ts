import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsl(75, 94%, 57%)",
        grey700: "hsl(0, 0%, 20%)",
        grey800: "hsl(0, 0%, 12%)",
        grey900: "hsl(0, 0%, 8%)",
      },
      container :{
        screens:{
          xs : "480px",
        }
      }
    },
  },
  plugins: [],
};
export default config;
