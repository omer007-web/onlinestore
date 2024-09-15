/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        oneTurn: {
          '100%': { transform: 'rotate(1turn)' }
        }
      },
      animation: {
        'one-turn-1': 'oneTurn 1s linear infinite',
        'one-turn-2': 'oneTurn 2s linear infinite',
        'one-turn-3': 'oneTurn 3s linear infinite'
      }
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1250px'
      },
      center: true,
      padding: '2rem'
    }
  },
  plugins: []
}
