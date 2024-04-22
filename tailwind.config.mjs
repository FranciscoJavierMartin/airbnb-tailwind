/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#222222',
        },

        airbnb: {
          accent: '#ff5a5f',
          green: '#00a699',
          orange: '#fc642d',
          gray: {
            light: '#767676',
            dark: '#484848',
          },
        },
      },
      fontFamily: {
        text: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
