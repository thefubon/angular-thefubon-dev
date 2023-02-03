const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        ...defaultTheme.fontFamily.sans,
      ]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        light: {
          'primary': '#ff500b',
          'secondary-bg': '#fff',
          'theme': '#fff',
          'header-color': '#c23fe2',
          'route-link-active': '#fff',
          'link-color': '#555050',
          'border-color': '#555050',
        }, 
        dark: {
          'primary': '#2577c1',
          'secondary-bg': '#424242',
          'theme': '#424242',
          'header-color': '#424242',
          'route-link-active': '#ff500b',
          'link-color': '#fff',
          'border-color': '#1cd61c',
        }
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
