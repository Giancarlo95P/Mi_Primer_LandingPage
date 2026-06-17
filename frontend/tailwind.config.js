/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Tus rutas de archivos
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