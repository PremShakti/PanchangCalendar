import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        devanagari: ["var(--font-noto-sans-devanagari)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
      colors: {
        // Existing shadcn/ui colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },

        // Traditional Indian Temple Colors
        saffron: {
          50: "hsl(var(--saffron-50))",
          100: "hsl(var(--saffron-100))",
          200: "hsl(var(--saffron-200))",
          500: "hsl(var(--saffron-500))",
          600: "hsl(var(--saffron-600))",
          700: "hsl(var(--saffron-700))",
          900: "hsl(var(--saffron-900))",
        },
        kumkum: {
          50: "hsl(var(--kumkum-50))",
          100: "hsl(var(--kumkum-100))",
          200: "hsl(var(--kumkum-200))",
          500: "hsl(var(--kumkum-500))",
          600: "hsl(var(--kumkum-600))",
          700: "hsl(var(--kumkum-700))",
          900: "hsl(var(--kumkum-900))",
        },
        gold: {
          50: "hsl(var(--gold-50))",
          100: "hsl(var(--gold-100))",
          200: "hsl(var(--gold-200))",
          500: "hsl(var(--gold-500))",
          600: "hsl(var(--gold-600))",
          700: "hsl(var(--gold-700))",
          900: "hsl(var(--gold-900))",
        },
        maroon: {
          50: "hsl(var(--maroon-50))",
          100: "hsl(var(--maroon-100))",
          200: "hsl(var(--maroon-200))",
          500: "hsl(var(--maroon-500))",
          600: "hsl(var(--maroon-600))",
          700: "hsl(var(--maroon-700))",
          900: "hsl(var(--maroon-900))",
        },
        "royal-blue": {
          50: "hsl(var(--royal-blue-50))",
          100: "hsl(var(--royal-blue-100))",
          200: "hsl(var(--royal-blue-200))",
          500: "hsl(var(--royal-blue-500))",
          600: "hsl(var(--royal-blue-600))",
          700: "hsl(var(--royal-blue-700))",
          900: "hsl(var(--royal-blue-900))",
        },
        "sacred-green": {
          50: "hsl(var(--sacred-green-50))",
          100: "hsl(var(--sacred-green-100))",
          200: "hsl(var(--sacred-green-200))",
          500: "hsl(var(--sacred-green-500))",
          600: "hsl(var(--sacred-green-600))",
          700: "hsl(var(--sacred-green-700))",
          900: "hsl(var(--sacred-green-900))",
        },
        "cream-white": "hsl(var(--cream-white))",
        "warm-beige": "hsl(var(--warm-beige))",
        "stone-grey": "hsl(var(--stone-grey))",
        charcoal: "hsl(var(--charcoal))",
        "dark-brown": "hsl(var(--dark-brown))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
     screens: {
      xs: "420px", // 👈 starts applying at 320px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
