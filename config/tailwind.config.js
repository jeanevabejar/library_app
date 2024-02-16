const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'customFont' : "'Protest Revolution', sans-serif"
      },
      backgroundImage: theme => ({
        'custom-bg': "url(https://i.pinimg.com/564x/10/2b/0f/102b0fa66242bc775471a7aaeaa4fb71.jpg)",
        'create-img':'url(https://i.pinimg.com/564x/e4/85/b9/e485b9a82dfdb9358947c3fead848305.jpg)',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
