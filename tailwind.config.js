module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-41': '-10.6rem',
        '-42': '-10.7rem'
      },
      height: {
        '2.25rem': '2.25rem',
        '30': '7rem',
        '41': '10.6rem',
        '72': '18rem',
        '74': '18.5rem',
        '80': '20rem',
        '82': '20.5rem',
        '88': '22rem',
        '106': '26.5rem'
      },
      width: {
        '26-persen': '26%'
      }
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'focus'],
    negativeMargin: ['responsive', 'hover'],
    overflow: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'hover'],
    transitionDuration: ['responsive', 'hover', 'focus'],
    fontFamily: ['responsive', 'hover', 'focus'],
    animation: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    padding: ['hover'],
    fontSize: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
