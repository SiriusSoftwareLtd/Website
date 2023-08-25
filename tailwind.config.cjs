/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "pulse-subtle": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-subtle-delayed": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) 3s infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
      fontFamily: {
        sftext: ["SF Pro Text", ...defaultTheme.fontFamily.sans],
        sfdisplay: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  safelist: ["text-fuchsia-100", "text-fuchsia-200", "text-fuchsia-300", "text-fuchsia-400", "text-fuchsia-500", "text-fuchsia-600", "text-fuchsia-700", "text-fuchsia-800", "text-fuchsia-900"],
  plugins: [require("@tailwindcss/typography")],
};
