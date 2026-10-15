/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: { xs: "420px", sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        night: "#0a1511",
        surface: "#101f19",
        brand: "#f0708f",
        brandDark: "#dd5878",
        mint: "#8fd8c8",
        gold: "#e3b56b",
        cream: "#f4ede5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.94)" }, "100%": { opacity: 1, transform: "none" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-5px)" } },
        ring: { "0%": { boxShadow: "0 0 0 0 rgba(240,112,143,.45)" }, "100%": { boxShadow: "0 0 0 14px rgba(240,112,143,0)" } },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
        pop: "pop .25s ease-out both",
        marquee: "marquee 28s linear infinite",
        float: "float 4s ease-in-out infinite",
        ring: "ring 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
