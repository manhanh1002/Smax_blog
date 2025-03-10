module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    dark: 'var(--color-primary-dark)',
                    light: 'var(--color-primary-light)',
                    text: 'var(--color-primary-text)'
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                    light: 'var(--color-secondary-light)'
                },
                heading: {
                    DEFAULT: "var(--color-heading)",
                    light: "var(--color-heading-light)"
                },
                body: "#555555",
                white: {
                    DEFAULT: "#FFFFFF",
                    light: "#f9f9f9",
                    lighter: "#fafafa",
                    "deep": "#EDEBF5"
                },
                gray: {
                    'light': '#f7f7f7'
                },
                blue: {
                    dark: "#0f0054"
                },
            },
            spacing: {
                30: '30px',
                15: '60px',
                50: '50px'
            },
            borderWidth: {
                1: '1px',
            },
            keyframes: {
                'waves': {
                    '0%': {
                      transform: 'scale(0)'
                    },
                    '100%': {
                      opacity: '0',
                      transform: 'scale(1.0)'
                    },
                },

                'fadeInDown': {
                    'from': {
                        opacity: '0',
                        transform: 'translate3d(0, -100%, 0)'
                    },

                    'to': {
                        opacity: '1',
                        transform: 'none'
                    }
                }
            },
            animation: {
                'spinner': 'waves 1.0s infinite ease-in-out',
                'fadeInDown': 'fadeInDown .7s ease-in-out 0s 1 normal none running'
            }
        },

        fontSize: {
            base: ['15px'],
            normal: "16px",
            sm: ['0.875rem'],
            lg: ['1.125rem'],
            xl: ['1.25rem'],
            '2xl': ['1.5rem'],
            '3xl': ['1.875rem'],
            '4xl': ['2.25rem'],
            '6xl': ['3.75rem', {
                lineHeight: '1.2'
            }],
        },
        fontFamily: {
            base: ["Lexend", "Tahoma"]
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px"
            },
        },
        gridColumnEnd: {
            "-1": "-1"
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
        },
    },
    plugins: [
        function ({ addVariant }) {
          addVariant('children', '& > *')
        },
    ],
}
