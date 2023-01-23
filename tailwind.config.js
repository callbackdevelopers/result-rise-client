/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {},
  },
  plugins: [require("daisyui")],
}

=======
    extend: {
      fontFamily: {
        custom: ["Space Grotesk"]
      }
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "false",
  },
}
>>>>>>> 2da39eeab4369883c270d722a05a8167649d81fd
