/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    }, boxShadow: {
      "full" : "0px 0px 15px 4px rgba(0,0,0,0.1)      "
    }
  ,
    backgroundImage: {
      'company': "url('img1.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
}

