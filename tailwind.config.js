/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            screens: {
                xl: "1280px",
            },
            colors: {
                sidebar: "#9398BF",
                menubar: "#ADADAD",
            },
        },
    },
    plugins: [],
};
