/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend:{
    colors:{ 
      lightyellow:"#4f6d876",
      white:"#fffbf2",
      darkGreen:"#05ab54",
      dark:"#1e1e1e",
     },

     fontFamily:{
      sans:['Poppins', 'sans-serif'],
      league:['League-Gothic', 'sans-serif'],
     },

     container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'rem',
        '2xl':'6rem',
      },
     },
   },
  },
  plugins:[],
};