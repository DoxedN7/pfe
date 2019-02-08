import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created (){
    firebase.initializeApp({
      apiKey: "AIzaSyDfDVfahqSf04t8UrTzF25Ansp1lR6Eyrs",
      authDomain: "gpufinal.firebaseapp.com",
      databaseURL: "https://gpufinal.firebaseio.com",
      projectId: "gpufinal",
      storageBucket: "gpufinal.appspot.com"
    })
  }
}).$mount('#app')