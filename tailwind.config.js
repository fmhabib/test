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
      'bl-gradient': 'linear-gradient(48deg, rgba(2,0,36,1) 0%, rgba(16,57,119,1) 0%, rgba(23,19,82,1) 100%)'
    }},
  },
  plugins: [],
}
