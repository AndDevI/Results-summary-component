/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'hanken':['Hanken Grotesk', 'sans-serif']
    },
    extend: {
      colors: {
        'lightRed':'#FF5757',
        'orangeyYellow':'#FFB01F',
        'greenTeal':'#00BD91',
        'cobaltBlue':'#1125D4',

        'lightSlateBlue':'#7857FF',
        'lightRoyalBlue':'#2E2BE9',
        'violetBlue':'#4E21CA',
        'persianBlue':'#2421CA',

        'paleBlue':'#EBF1FF',
        'lightLavender':'#C8C7FF',
        'darkGrayBlue':'#303B5A',
      }
    },
  },
  plugins: [],
}

