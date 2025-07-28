/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBF0E9',
        accent: '#CE8F8A',
        dark: '#805050',
        tan: '#D4C2A1',
        muted: '#AD9C92'
      },
      fontFamily: {
        title: ['\'Playfair Display\'', 'serif'],
        body: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: [],
}
