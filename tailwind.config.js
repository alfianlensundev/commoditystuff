module.exports = {
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                xss: '.6rem'
            },
            colors: {
                'custom-green': '#177165',
                'custom-white': '#F5FEFE',
            },
            width: {
                'fit-content': 'fit-content',
                'screen-h-80': '80vh',
                'screen-h-70': '70vh'
            },
            height: {
                'screen-70': '70vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
                'fit-content': 'fit-content'
            },
            inset: {
                'min-h-15': '-15vh', 
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}