module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-soft-blue' : '#8BACDA',
        'primary-cyan' : '00FFF7',
        'neutral-main-bg' : '#0D192B',
        'neutral-card-bg' : '#14253D',
        'neutral-line' : '#2F415B',
        'neutral-white' : '#FFFFFF'
      },
      fontFamily: {
        'main-font' : ['Outfit' , 'sans-serif'],
      },
      fontWeight: {
        'light-300' : 300,
        'medium-400' : 400,
        'bold-600' : 600,
      },
    },
  },
  plugins: [],
}
