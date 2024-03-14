/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F9FA',
        seconddary: '#001B38',
       
      },
      // fontFamily:{
      //   mono:''
      // }
    },
  },
  plugins: [],
}

