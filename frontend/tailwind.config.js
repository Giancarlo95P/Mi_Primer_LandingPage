/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./index.html"], // Tus rutas de archivos
  theme: {
    extend: {
      fontFamily: {
        /* Nombramos la clase como font-sans para que aplique a todo */
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}