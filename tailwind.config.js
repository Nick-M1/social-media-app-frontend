/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      width: {
        screen: ['100vw', '100dvw'],
      },

      opacity: {
        15: '.15'
      },
      margin: {
        0.25: '.25'
      },
      fontSize: {
        smaller: '0.95rem'
      },

      gridTemplateColumns: {
        "sidebar-large": "250px auto 400px",
        "sidebar-medium": "64px auto 400px",
        "sidebar-small": "64px auto 0px",
        "sidebar-collapsed": "0px auto 0px",
      },

      keyframes: {
        bounceRight: {
          '0%, 100%': {transform: 'translateX(-25%)'},
          '50%': {transform: 'translateX(0%)'},
        },
      },
      animation: {
        bounceRight: 'bounceRight 1s infinite',
      },
    },
  },
  plugins: [],
}

