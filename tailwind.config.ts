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
        
        // Indian/Hindu themed colors
        saffron: {
          light: "hsl(var(--saffron-light))",
          DEFAULT: "hsl(var(--saffron))",
          dark: "hsl(var(--saffron-dark))",
          darker: "hsl(var(--saffron-darker))",
        },
        kumkum: {
          light: "hsl(var(--kumkum-light))",
          DEFAULT: "hsl(var(--kumkum))",
          dark: "hsl(var(--kumkum-dark))",
        },
        sindoor: "hsl(var(--sindoor))",
        gold: {
          light: "hsl(var(--gold-light))",
          DEFAULT: "hsl(var(--gold))",
          dark: "hsl(var(--gold-dark))",
        },
        turmeric: "hsl(var(--turmeric))",
        earth: {
          light: "hsl(var(--earth-light))",
          DEFAULT: "hsl(var(--earth))",
          dark: "hsl(var(--earth-dark))",
        },
        sandalwood: "hsl(var(--sandalwood))",
        lotus: {
          pink: "hsl(var(--lotus-pink))",
          DEFAULT: "hsl(var(--lotus))",
        },
        peacock: {
          blue: "hsl(var(--peacock-blue))",
        },
        tulsi: {
          green: "hsl(var(--tulsi-green))",
        },
        sacred: {
          white: "hsl(var(--sacred-white))",
          cream: "hsl(var(--sacred-cream))",
          grey: "hsl(var(--sacred-grey))",
        },
        charcoal: "hsl(var(--charcoal))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
