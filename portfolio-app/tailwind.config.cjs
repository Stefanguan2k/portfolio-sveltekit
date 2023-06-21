/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        green: '0 4px 6px rgba(142,200,180,0.2)',
        purple:'0 4px 6px rgba(202,188,230,0.2)',
      },
      colors: {
        main: {
          100: '#0087AC',
        },
        background: {
          100: '#fbfbfb',
          200: '#f3f3f3',
          300: '#e6e6e6',
          400: '#d3d3d3',
          500: '#505050',
          600: '#404040',
          700: '#353535',
          900: '#242424',
        },
        nav: {
          100: 'rgba(255,255,255,0.65)',
          700: 'rgba(90,90,90,0.7)',
          800: 'rgba(22,22,23,0.7)',
        },
      },
      height: {
        nav: '50px',
      },
      spacing: {
        nav: '50px',
      },
      transitionTimingFunction: {
        'ios-smooth': 'cubic-bezier(0.1, 1, 0.2, 1)',
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
