/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1080px',
        xl: '1440px'
      },
      colors: {
        icandyOrange: '#F6B600',
        icandyblack: '#151515'
      },
      fontFamily: {
        heading: ['Oswald'],
        body: ['Open Sans']
      }
    },
  },
  plugins: [],
}
