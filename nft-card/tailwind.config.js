module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
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
        'info-width' : "90%",
        'value-section-width' : "40%",
        'subimage-eth-width' : "11%",
        'subimage-clock-width' : "20%",
        'eye-width' : "22%",
        //medium screen(1450-1600)
        'md-card-width' : "28%",
        //large screen(1600-1850)
        'lg-card-width' : "26%",
        //xl screen(1850-2100)
        'xl-card-width' : "24%",
        //2xl screen(2100-2350)
        "2xl-card-width" : "22%",
        //3xl screen(2350-2600)
        "3xl-card-width" : "20%",
        //4xl screen(2600-2850)
        "4xl-card-width" : "18%",
        //5xl screen(2850-3100)
        "5xl-card-width" : "16%",
        //6xl screen(3100-3350)
        "6xl-card-width" : "14%",
        //7xl screen(3350-3600)
        "7xl-card-width" : "12%",
        //8xl screen(3600+)
        "8xl-card-width" : "10%",
      },
      height: {
        'layout-height' : "85%",
        'info-height' : "90%",
        'card-height' : "78%",
        'image-height' : "50%",
        'subinfo-height' : "50%",
        'avatar-height' : "75%",
        'eye-height' : "22%",
      },
      inset : {
        "layout-x" : "5%",
        "layout-y" : "7.5%",
        "card-y" : "11%",
        "info" : "5%",
        "eye" : "39%",
        //medium screen(1450-1600)
        "md-card-x" : "36%",
        //large screen(1600-1850)
        "lg-card-x" : "37%",
        //xl screen(1850-2100)
        "xl-card-x" : "38%",
        //2xl screen(2100-2350)
        "2xl-card-x" : "39%",
        //3xl screen(2350-2600)
        "3xl-card-x" : "40%",
        //4xl screen(2600-2850)
        "4xl-card-x" : "41%",
        //5xl screen(2850-3100)
        "5xl-card-x" : "42%",
        //6xl screen(3100-3350)
        "6xl-card-x" : "43%",
        //7xl screen(3350-3600)
        "7xl-card-x" : "44%",
        //8xl screen(3600+)
        "8xl-card-x" : "45%",
      },
      fontSize: {
        "title-size" : ['28px' , '34px'],
        "time-size" : ['17px' , '23px'],
      },
      backgroundImage: {
        'main-image' : "url('/public/images/image-equilibrium.jpg')",
      },
      borderRadius: {
        'layout' : '32px',
        'image' : '30px',
      },
      screens: {
        'md' : {'min' : '1450px' , 'max' : '1600px'},
        'lg' : {'min' : '1600px' , 'max' : '1850px'},
        'xl' : {'min' : '1850px' , 'max' : '2100px'},
        '2xl' : {'min' : '2100px' , 'max' : '2350px'},
        '3xl' : {'min' : '2350px' , 'max' : '2600px'},
        '4xl' : {'min' : '2600px' , 'max' : '2850px'},
        '5xl' : {'min' : '2850px' , 'max' : '3100px'},
        '6xl' : {'min' : '3100px' , 'max' : '3350px'},
        '7xl' : {'min' : '3350px' , 'max' : '3600px'},
        '8xl' : {'min' : '3600px' , 'max' : '4000px'}
      }
    },
  },
  plugins: [],
}
