import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			purple: {
  				DEFAULT: '#6C63FF',
  				50: '#F0EFFF',
  				100: '#E0DEFF',
  				200: '#C1BCFF',
  				300: '#A29AFF',
  				400: '#8378FF',
  				500: '#6C63FF',
  				600: '#4B41DB',
  				700: '#3A31B0',
  				800: '#292180',
  				900: '#181050',
  			},
  			cyan: {
  				DEFAULT: '#00D4FF',
  				50: '#E0F9FF',
  				100: '#B3F0FF',
  				200: '#80E5FF',
  				300: '#4DD9FF',
  				400: '#26CFFF',
  				500: '#00D4FF',
  				600: '#00A8CC',
  				700: '#007A99',
  				800: '#005266',
  				900: '#002A33',
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-20px)' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.4)' },
  				'50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.8)' }
  			},
  			'gradient-shift': {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' }
  			},
  			'spin-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' }
  			},
  			'marquee': {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-50%)' }
  			},
  			'fade-in-up': {
  				'0%': { opacity: '0', transform: 'translateY(30px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			'scale-in': {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			'slide-in-right': {
  				'0%': { opacity: '0', transform: 'translateX(30px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'slide-in-left': {
  				'0%': { opacity: '0', transform: 'translateX(-30px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'bounce-subtle': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-5px)' }
  			},
  			'ping-slow': {
  				'75%, 100%': { transform: 'scale(2)', opacity: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float': 'float 6s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
  			'gradient-shift': 'gradient-shift 8s ease infinite',
  			'spin-slow': 'spin-slow 20s linear infinite',
  			'marquee': 'marquee 30s linear infinite',
  			'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
  			'fade-in': 'fade-in 0.5s ease-out forwards',
  			'scale-in': 'scale-in 0.5s ease-out forwards',
  			'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
  			'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
  			'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
  			'ping-slow': 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
