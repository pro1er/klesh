import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        big: "#00007A",
        mid: "#FFC300",
        small: "#535353",
        back: "#F2F2F2",
      },
      fontFamily: {
        monBlack:["monBlack"],
        monRegular:["monRegular"],
      },
    },
  },
  plugins: [],
};
export default config;
