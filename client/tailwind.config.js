/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'search-svg':
                    'url(../public/img/search_FILL0_wght400_GRAD0_opsz48.svg)',
            },
        },
    },
    plugins: [],
};
