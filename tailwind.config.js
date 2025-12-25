/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Palette Extension
        coffee_bean: {
          DEFAULT: '#7f5539',
          100: '#19110b',
          200: '#332217',
          300: '#4c3322',
          400: '#65442e',
          500: '#7f5539',
          600: '#ac734d',
          700: '#c29678',
          800: '#d7b9a5',
          900: '#ebdcd2'
        },
        camel: {
          DEFAULT: '#a68a64',
          100: '#221c13',
          200: '#433727',
          300: '#65533a',
          400: '#876f4d',
          500: '#a68a64',
          600: '#b8a183',
          700: '#c9b9a2',
          800: '#dbd0c1',
          900: '#ede8e0'
        },
        almond_cream: {
          DEFAULT: '#ede0d4',
          100: '#3f2c1a',
          200: '#7f5935',
          300: '#b88555',
          400: '#d2b295',
          500: '#ede0d4',
          600: '#f1e6dc',
          700: '#f4ece5',
          800: '#f8f3ee',
          900: '#fbf9f6'
        },
        dusty_olive: {
          DEFAULT: '#656d4a',
          100: '#14160f',
          200: '#282c1e',
          300: '#3d422d',
          400: '#51573b',
          500: '#656d4a',
          600: '#899465',
          700: '#a7b08a',
          800: '#c4cab1',
          900: '#e2e5d8'
        },
        ebony: {
          DEFAULT: '#414833',
          100: '#0d0e0a',
          200: '#1a1d14',
          300: '#272b1e',
          400: '#343929',
          500: '#414833',
          600: '#6a7553',
          700: '#919e77',
          800: '#b6bfa4',
          900: '#dadfd2'
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
