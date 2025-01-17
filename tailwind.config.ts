import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			"fade-up": "fadeUp 2.5s ease-in-out forwards",
			"fadeLeft": 'fadeLeft 2.5s ease-in-out',
        	"fadeRight": 'fadeRight 2.5s ease-in-out',
		  },
		  keyframes: {
			fadeUp: {
			  "0%": {
				opacity: '0',
				transform: "translateY(40px)",
			  },
			  "100%": {
				opacity: '1',
				transform: "translateY(0)",
			  },
			},
			fadeLeft: {
				'0%': {
				  opacity: '0',
				  transform: 'translateX(-40px)',
				},
				'100%': {
				  opacity: '1',
				  transform: 'translateX(0)',
				},
			  },
			  fadeRight: {
				'0%': {
				  opacity: '0',
				  transform: 'translateX(40px)',
				},
				'100%': {
				  opacity: '1',
				  transform: 'translateX(0)',
				},
			}
		},
  		colors: {
  			big: '#00007A',
  			mid: '#FFC300',
  			small: '#535353',
  			back: '#F2F2F2',
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
  			}
  		},
  		fontFamily: {
  			monBlack: [
  				'monBlack'
  			],
  			monRegular: [
  				'monRegular'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	  screens: {
		'sm': '576px',
		// => @media (min-width: 576px) { ... }
  		'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
	  },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
