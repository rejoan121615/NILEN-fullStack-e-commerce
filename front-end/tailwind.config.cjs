const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "450px",
                mxl: "2000px",
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
            maxWidth: {
                "max-boundry": "2000px",
            },
            gridTemplateColumns: {
                "cus-12": "0.5fr repeat(10, 1fr) 0.5fr",
            },
        },
    },
};
