/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // Custom animations and keyframes
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-from-top': 'slideInFromTop 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
}