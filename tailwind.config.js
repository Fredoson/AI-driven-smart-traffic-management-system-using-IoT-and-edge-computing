/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1a1f36',
                accent: '#3b82f6',
                green: { signal: '#22c55e' },
                red: { signal: '#ef4444' },
            },
        },
    },
    plugins: [],
};
