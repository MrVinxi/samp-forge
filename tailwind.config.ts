import type { Config } from "tailwindcss";

const config: Config = {
  // Bagian ini sangat penting agar warna muncul
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forge-dark': '#050505',
        'forge-blue': '#0A192F',
        'forge-accent': '#0070f3',
      },
    },
  },
  plugins: [],
};
export default config;