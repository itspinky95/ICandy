/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        icandyOrange: '#F6B600',
        icandyblack: '#151515'
      },
      fontFamily: {
        heading: ['Oswald', 'Open Sans']
      }
    },
  },
  plugins: [],
}
