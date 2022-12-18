/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "450",
            },
            colors: {
                "c-red": "#E16950",
                "c-purple": "#B59EBF",
                "c-yellow": "#E9AF28",
                "c-black": "#131213",
                "c-ash": "#4d4a4b",
            },
            borderWidth: {
                DEFAULT: "2px",
            },
            borderColor: {
                DEFAULT: "#4d4a4b",
            },
        },
    },
};
