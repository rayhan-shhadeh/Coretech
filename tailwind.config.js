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
        'deep-blue': {
          DEFAULT: '#0A2463',
          light: '#0D2F7A',
          dark: '#071A47',
        },
        'electric-cyan': {
          DEFAULT: '#00D4FF',
          glow: '#00E5FF',
          dim: '#00A3CC',
        },
        // Secondary Colors
        'vibrant-orange': '#FF6B35',
        'dark-charcoal': '#1A1A2E',
        // Accent Colors
        'soft-gray': '#E8E8E8',
        'success-green': '#00C853',
        // Semantic Colors
        'warning': '#FFA726',
        'error': '#EF5350',
        'info': '#42A5F5',
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
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
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
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A2463 0%, #00D4FF 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00D4FF 0%, #00C853 100%)',
        'gradient-holographic': 'linear-gradient(120deg, #0A2463 0%, #00D4FF 40%, #00C853 70%, #FF6B35 100%)',
        'gradient-mesh': 'radial-gradient(circle at 20% 50%, rgba(0,212,255,0.3), transparent 50%), radial-gradient(circle at 80% 50%, rgba(10,36,99,0.3), transparent 50%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.4), 0 4px 12px rgba(0, 212, 255, 0.2)',
        'glow-cyan-lg': '0 0 30px rgba(0, 212, 255, 0.5), 0 8px 24px rgba(0, 212, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(10, 36, 99, 0.4), 0 4px 12px rgba(10, 36, 99, 0.2)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.4), 0 4px 12px rgba(255, 107, 53, 0.2)',
        'glow-green': '0 0 20px rgba(0, 200, 83, 0.4), 0 4px 12px rgba(0, 200, 83, 0.2)',
        'colored-cyan': '0 10px 40px rgba(0, 212, 255, 0.3)',
        'colored-blue': '0 10px 40px rgba(10, 36, 99, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
