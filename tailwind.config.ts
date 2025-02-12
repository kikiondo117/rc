import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        "rc-primary": "#E0825F",
        "rc-bg": "#1A1A1A",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
} satisfies Config;
