/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./pages/*.{js,vue,ts}",
    "./views/**/*.vue",
    "./plugins/*.ts",
    "./directives/*.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  content: {}
}
