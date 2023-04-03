/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        hospital: {
          primary: "#001c7b",
          secondary: '#14b8a6',
          success: "#001c7b",
          error: "#E01F28",
          "base-100": "#FFFFFF",
        },
      }

    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
