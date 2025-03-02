

/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primary: "#142F32",
       plight: '#2a5b5d',
       secondary: "#E3FFCC",
       tertiary: "#282930",
       fourth: "#777C90",
      },

      fontFamily:{
       Manrope:["Manrope", "snas-serif"]
      },
      boxShadow:{
       "inset":"3px 3px 4px rgba(20,47,50,0.25)",
      },

      container:{
        
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
          "3xl":"300rem",
        }
      },
    },
  },
  plugins: [],
}
