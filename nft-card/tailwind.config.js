module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-soft-blue' : '#8BACDA',
        'primary-cyan' : '#00FFF7',
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
      width: {
        'layout-width' : "90%",
        'card-width' : "28%",
        'info-width' : "90%",
        'value-section-width' : "40%",
        'subimage-eth-width' : "11%",
        'subimage-clock-width' : "20%"
      },
      height: {
        'layout-height' : "85%",
        'card-height' : "78%",
        'info-height' : "90%",
        'image-height' : "50%",
        'subinfo-height' : "50%",
        'avatar-height' : "75%",
      },
      inset : {
        "layout-x" : "5%",
        "layout-y" : "7.5%",
        "card-x" : "36%",
        "card-y" : "11%",
        "info" : "5%",
      },
      fontSize: {
        "title-size" : ['28px' , '34px'],
        "time-size" : ['17px' , '23px'],
      },
      backgroundImage: {
        'main-image' : "url('/public/images/image-equilibrium.jpg')",
      },
    },
  },
  plugins: [],
}
