/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#3597ff',
        'secondary': '#f3f9ff',
        'txt': {
          100: '#fff',
          400: '#9b9ca2',
          500: '#566b8d',
          600: '#1a232f',
        },
        'status-blue': '#5b94d7',
        'status-green': '#5cc19a',
        'status-yellow': '#dbca68',
        'status-red': '#b95e73',
        'status-blue-background': 'rgba(221, 236, 251, 0.4)',
        'status-green-background': 'rgba(156, 238, 204, 0.4)',
        'status-yellow-background': 'rgba(238, 226, 156, 0.4)',
        'status-red-background': 'rgba(238, 156, 156, 0.4)',
        'my-bg': {
          100: '#f0f0f1',
          200: '#f3f9ff',
          300: '#d7eaff',
        },
        'arrow': '#b8c0cf',
        'shadow': '#f7f8fa',
        //border colors
        'button': '#e3e4e6',
        'header': '#d7eaff',
      },
      maxHeight: {
        'minus-header': 'calc(100% - 57px)',
      },
      minWidth: {
        '40': '160px',
      },
      fontSize: {
        'fluid': 'calc(1.375rem + 1.5vw)',
      },
       screens: {
        'my-1200': '1200px', // Pridáva vlastný breakpoint 'my-1200' na 1200px
        'my-992': '992px',   // Pridáva vlastný breakpoint 'my-992' na 992px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

