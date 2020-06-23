import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

require('~/main.css')

export default function (Vue, { router, head, isClient }) {
  Vue.component(),
    head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
    }),
    Vue.use(Vuesax, {
      theme: {
        colors: {
          primary: '#5b3cc4',
          success: '#4fc08d',
          danger: 'rgb(242, 19, 93)',
          warning: 'rgb(255, 130, 0)',
          dark: '#f7df1e',
        }
      }
    })
}
