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
          DEFAULT: '#129990',  // Your main primary color
          light: '#90D1CA',   // Light variant
          dark: '#096B68',    // Dark variant
          subtle: '#E6F5F4'   // Extra light for backgrounds
        },
        secondary: {
          DEFAULT: '#FFFBDE', // Your main secondary color
          light: '#FFFEF5',   // Light variant
          dark: '#FFF5B1',    // Dark variant
          muted: '#FFFCEB'    // Muted variant
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
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
