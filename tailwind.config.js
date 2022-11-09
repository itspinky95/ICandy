/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    extend: {
      
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
