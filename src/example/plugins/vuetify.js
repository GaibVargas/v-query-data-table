import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  defaultAssets: { font: true },
  icons: {
    iconfont: 'md',
  },
  theme: {
    dark: false,
    options: { useCustomProperties: true },
    themes: {
      light: {
        primary: '#80C342',
        secondary: '#0052A4',
        error: '#E07975',
        warning: '#E16E16',
        info: '#297AA7',
        success: '#80C342',
        yellow: '#BC9D02',
        background: '#F2F6F9',
        greyBlue: '#A7B4C2',
        colorText: '#414141',
      },
    },
  },
}

export default new Vuetify(opts)