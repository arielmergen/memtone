/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta según tu estructura de carpetas
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primarybg: '#120907',   // color1 - Fondo principal
        container: '#122a3d',   // color2 - Contenedor principal
        accent: '#145d81',      // color3 - Botón secundario, bordes
        primary: '#1f99d1',     // color4 - Botón principal, títulos
        highlight: '#20d7d8',   // color5 - Detalles, hover, iconos
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}