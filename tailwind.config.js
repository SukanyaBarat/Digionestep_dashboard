/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      primary:'poppins',
    },
    container:{
      padding:{
        DEFAULT:'1rem',
        lg:'2rem'
      },
    },
    screens:{
    sm:'640px',
    md:'768px',
    lg:'1024px',
    },
    extend:{
    colors:{
    primary:'#e7daed',
    secondary:'#d981e3'
    },
    boxShadow:{
    1:'0px 4px 30px rgba(0,0,0,0.8)',
    },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};

