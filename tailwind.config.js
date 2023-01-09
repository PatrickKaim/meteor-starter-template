/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./ui/**/*.{vue,js,ts,jsx,tsx}', './client/**/*.{vue,js,ts,jsx,tsx}', './client/*.html'],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
