/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(29, 155, 240)",
        "custom-gray":"#71767b",
        "custom-border-color":"#252424"
      },
    
    },
  },
  plugins: [
    daisyui,
  ],
   
  
};
