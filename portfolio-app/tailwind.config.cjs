/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#0087AC',
        },
        background: {
          100: '#242424',
          500: '#353535',
        },
        nav: {
          100: 'rgba(22,22,23,0.8)',
        },
      },
      height: {
        nav: '50px',
      },
      spacing: {
        nav: '50px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.1, 1, 0.2, 1)',
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        }
      }
    },
  },
  plugins: [],
};
