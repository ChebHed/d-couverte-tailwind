const colors = require('tailwindcss/colors')
module.exports = {



    purge: ['./*html'],

    theme: {
        

        fontFamily:{
            lora: "'Lora','serif'"
            },

        colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.trueGray,
                indigo: colors.indigo,
                green: colors.green,
                blue: colors.blue,
                red: colors.rose,
                yellow: colors.amber,
            },
            extend: {
                spacing: {
                    'enorme': '80rem'
                },
                transitionDuration: {
                    '2000': '2000ms',
                    '3000': '3000ms'
                }
            }
        },


        variants: {
            extend: {
                grayscale: ['hover', 'focus'],
                sepia: ['hover', 'focus'],
                invert: ['hover', 'focus'],
                backgroundColor: ['active']
            }
        }
}
    