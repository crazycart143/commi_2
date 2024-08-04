/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/src/assets/wholewall-bg.png')",
        'hero-overlay': "url('/src/assets/wholewall-bg-overlay.png')",
        'challenge-header': "url('/src/assets/challenges-bg-header.png')",
        'challenge-platform': "url('/src/assets/platform.png')"
      }),
      dropShadow: {
        white: [
          '0 6px 10px rgba(255, 255, 255, 0.1)',
          '0 12px 18px rgba(255, 255, 255, 0.05)',
          '0 24px 30px rgba(255, 255, 255, 0.1)',
          '0 30px 60px rgba(255, 255, 255, 0.15)'
        ]
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    }
  },
  plugins: []
}
