/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-blue': '#0A2463',
        'electric-cyan': '#00D4FF',
        // Secondary Colors
        'vibrant-orange': '#FF6B35',
        'dark-charcoal': '#1A1A2E',
        // Accent Colors
        'soft-gray': '#E8E8E8',
        'success-green': '#00C853',
      },
      fontFamily: {
        'heading': ['Exo 2', 'Rajdhani', 'sans-serif'],
        'body': ['Inter', 'Source Sans Pro', 'sans-serif'],
        'accent': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A2463 0%, #00D4FF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00D4FF 0%, #00C853 100%)',
      },
    },
  },
  plugins: [],
}
