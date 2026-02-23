/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1200px",
            },
        },
        fontFamily: {
            sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        },
        extend: {
            letterSpacing: {
                'tighter': '-0.04em',
                'tight': '-0.02em',
            },
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
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        'code::before': {
                            content: '""'
                        },
                        'code::after': {
                            content: '""'
                        },
                        'blockquote p:first-of-type::before': {
                            content: '""'
                        },
                        'blockquote p:last-of-type::after': {
                            content: '""'
                        },
                        code: {
                            color: 'var(--tw-prose-code)',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '0.25rem',
                            paddingLeft: '0.375rem',
                            paddingRight: '0.375rem'
                        },
                        '--tw-prose-body': 'var(--tw-prose-body-color)',
                        '--tw-prose-headings': 'var(--tw-prose-headings-color)',
                        '--tw-prose-links': 'var(--tw-prose-links-color)',
                        '--tw-prose-code': 'var(--tw-prose-code-color)',
                        '--tw-prose-quotes': 'var(--tw-prose-quotes-color)',
                    }
                },
                invert: {
                    css: {
                        '--tw-prose-body': 'var(--tw-prose-invert-body)',
                        '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
                        '--tw-prose-links': 'var(--tw-prose-invert-links)',
                        '--tw-prose-code': 'var(--tw-prose-invert-code)',
                        '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
                        code: {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                        }
                    }
                }
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}