/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      colors: {
        // Heritage Color Palette - Sophisticated & Elegant
        heritage: {
          // Primary Heritage Brown (#795939)
          brown: {
            50: '#faf8f6',
            100: '#f3f0ec',
            200: '#e6ddd4',
            300: '#d4c5b5',
            400: '#bfa48a',
            500: '#a08568',
            600: '#8a6f52',
            700: '#795939', // Primary heritage brown
            800: '#654a30',
            900: '#533d28',
            DEFAULT: '#795939',
          },
          // Warm Gold (#c5a77d)
          gold: {
            50: '#fdfcf9',
            100: '#faf6f0',
            200: '#f3ebe0',
            300: '#e9dac8',
            400: '#dcc4a8',
            500: '#c5a77d', // Primary heritage gold
            600: '#b5956b',
            700: '#9d8159',
            800: '#826b4a',
            900: '#6b583e',
            DEFAULT: '#c5a77d',
          },
          // Sophisticated Gray (#4a4a4a)
          gray: {
            50: '#f9f9f9',
            100: '#f0f0f0',
            200: '#e4e4e4',
            300: '#d1d1d1',
            400: '#b4b4b4',
            500: '#9a9a9a',
            600: '#818181',
            700: '#6a6a6a',
            800: '#4a4a4a', // Primary heritage gray
            900: '#3d3d3d',
            DEFAULT: '#4a4a4a',
          },
          // Elegant Cream (#e6c07a)
          cream: {
            50: '#fefdfb',
            100: '#fdf9f3',
            200: '#faf2e6',
            300: '#f5e7d1',
            400: '#eed5b0',
            500: '#e6c07a', // Primary heritage cream
            600: '#ddb05f',
            700: '#c99a4a',
            800: '#a67f3e',
            900: '#886835',
            DEFAULT: '#e6c07a',
          },
          // Soft Beige (#c4b597)
          beige: {
            50: '#fcfbf9',
            100: '#f8f6f2',
            200: '#f1ede4',
            300: '#e7e0d2',
            400: '#d9ceb8',
            500: '#c4b597', // Primary heritage beige
            600: '#b5a485',
            700: '#9d8f70',
            800: '#82765d',
            900: '#6b614d',
            DEFAULT: '#c4b597',
          },
        },
        // Legacy colors for backward compatibility
        walnut: {
          DEFAULT: '#795939',
          50: '#faf8f6',
          500: '#795939',
          600: '#654a30',
          700: '#533d28',
          800: '#3d2a1e',
          900: '#2a1c14',
        },
        tan: {
          DEFAULT: '#c5a77d',
          50: '#fdfcf9',
          400: '#c5a77d',
          500: '#b5956b',
          600: '#9d8159',
        },
        charcoal: {
          DEFAULT: '#4a4a4a',
          50: '#f9f9f9',
          600: '#4a4a4a',
          700: '#3d3d3d',
          800: '#333333',
          900: '#2a2a2a',
        },
        warm: {
          DEFAULT: '#e6c07a',
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e6',
          300: '#f5e7d1',
          400: '#e6c07a',
          500: '#ddb05f',
          600: '#c99a4a',
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
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
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        // Heritage spacing system for consistency
        'section': '8rem',      // 128px - Standard section padding
        'section-sm': '6rem',   // 96px - Smaller section padding
        'section-lg': '10rem',  // 160px - Larger section padding
        'container': '2rem',    // 32px - Container padding
        'card': '2.5rem',       // 40px - Card padding
        'card-sm': '1.5rem',    // 24px - Small card padding
        'card-lg': '3rem',      // 48px - Large card padding
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Heritage shadow system
        'heritage': '0 4px 6px -1px rgba(121, 89, 57, 0.1), 0 2px 4px -1px rgba(121, 89, 57, 0.06)',
        'heritage-lg': '0 20px 25px -5px rgba(121, 89, 57, 0.1), 0 10px 10px -5px rgba(121, 89, 57, 0.04)',
        'heritage-xl': '0 25px 50px -12px rgba(121, 89, 57, 0.25)',
        'warm': '0 10px 15px -3px rgba(230, 192, 122, 0.1), 0 4px 6px -2px rgba(230, 192, 122, 0.05)',
        'warm-lg': '0 20px 25px -5px rgba(230, 192, 122, 0.15), 0 10px 10px -5px rgba(230, 192, 122, 0.08)',
        'warm-xl': '0 25px 50px -12px rgba(230, 192, 122, 0.25)',
        'elegant': '0 8px 32px rgba(121, 89, 57, 0.12), 0 2px 8px rgba(121, 89, 57, 0.08)',
        'soft': '0 2px 8px rgba(74, 74, 74, 0.06), 0 1px 4px rgba(74, 74, 74, 0.04)',
        // Legacy shadows
        'luxury': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'luxury-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
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
        // Heritage keyframes for smooth animations
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Heritage animations - smooth and elegant
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-scale': 'fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-left': 'fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}