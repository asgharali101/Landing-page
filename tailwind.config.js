/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':{'min':'320','max':'760'}, 
    },
    container:{
      center:true,
    }
  },
  plugins: [],
}
}
