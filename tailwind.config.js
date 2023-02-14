const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    'node_modules/preline/dist/*.js',
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
        base: {
          'default': '#2B2B2B',
          'primary': '#0073FF',
          'secondary': '#F07D00',
          'tertiary': '#E4136C',
          'system': '#E2E8F0',
          'light': '#ffffff',
          'dark': '#002033',
          'caution': '#FACC15',
          'success': '#22C55E',
          'alert': '#F43F5E',
          'normal': '#38BDF8',
          'error': '#DC2626',
        },
        offers: {
          'base': '#F8F8F8',
          'travel': '#F0F9FF',
          'dacha': '#F0FDF4',
        },
        link: {
          DEFAULT: '#0073FF',
          'hover': '#4C95EF',
          'active': '#045CC8',
          'disabled': '#E2E8F0',
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
