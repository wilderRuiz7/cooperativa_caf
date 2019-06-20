import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify, {
  theme: {
    primary: '#0d47a1',
    secondary: '#424242',
    accent: 'white',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    activo: 'black'
  },
  options: {
    customProperties: true
  },
  iconfont: 'fa',
  lang: {
    locales: { es },
    current: 'es'
  }
})
