/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      textShadow: {
        '8xl': '0 0 80px rgba(0, 0, 0, 0.8), 0 0 120px rgba(0, 0, 0, 0.6), 0 0 160px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const textShadows = theme('textShadow', {});
      const utilities = Object.entries(textShadows).reduce((acc, [key, value]) => {
        acc[`.text-shadow-${key}`] = {
          'text-shadow': value,
        };
        return acc;
      }, {});
      addUtilities(utilities);
    },
  ],
} 