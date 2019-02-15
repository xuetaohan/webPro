// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
// let app = document.createElement('div')
// app.id = 'app'
// document.body.appendChild(app)
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render(h) {
    return h(App)
  }
}).$mount(root)
