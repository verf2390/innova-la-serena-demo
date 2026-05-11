import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7fb",
          100: "#ffeef7",
          500: "#e96ba8",
          700: "#b63b75"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(217, 102, 146, 0.16)"
      }
    }
  },
  plugins: []
} satisfies Config;
