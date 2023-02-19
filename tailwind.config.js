/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#047AFF",

          secondary: "#463AA2",

          accent: "#C148AC",

          neutral: "#021431",

          "base-100": "#FFFFFF",

          info: "#93E7FB",

          success: "#81CFD1",

          warning: "#EFD7BB",

          error: "#E58B8B",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
