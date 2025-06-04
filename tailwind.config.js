/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#129990',
          light: '#90D1CA',
          dark: '#096B68',
          subtle: '#E6F5F4'
        },
        secondary: {
          DEFAULT: '#FFFBDE',
          light: '#FFFEF5',
          dark: '#FFF5B1',
          muted: '#FFFCEB'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))', // Simplified from object to direct value
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        teal: {
          50: '#E6F5F4',
          100: '#C0E5E3',
          200: '#90D1CA',
          300: '#5ABCB4',
          400: '#2FA89F',
          500: '#129990',
          600: '#0D7F77',
          700: '#096B68',
          800: '#05514F',
          900: '#023A39'
        },
        cream: {
          50: '#FFFEF5',
          100: '#FFFBDE',
          200: '#FFF5B1',
          300: '#FFEE7D',
          400: '#FFE74A',
          500: '#FFE017',
          600: '#D4BA12',
          700: '#AA950D',
          800: '#807009',
          900: '#554B06'
        }
      },
      // Add this new borderColor configuration
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.border'),
        ...theme('colors') // This spreads all your color definitions as border colors
      })
    }
  },
  plugins: [require("tailwindcss-animate")],
}