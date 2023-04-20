/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#0087AC',
        },
      },
      height: {
        nav: '50px',
      },
    },
  },
  plugins: [],
};
