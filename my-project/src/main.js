import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import firebase from 'firebase'
// import router from './router';
//import store from './store';
// import firebase from 'firebase';


const functions = require('firebase-functions');

Vue.config.productionTip = false

// Your web app's Firebase configuration
let yourApiKey = ""
if (functions.config().hasOwnProperty('info')) {
  yourApiKey = functions.config().info.apikey
} else {
  yourApiKey = "Replace this to your apikey"
}
const firebaseConfig = {
  apiKey: "AIzaSyD9fSwWt_v0Wp704uIWLNn7Bld45Ku6854",
    authDomain: "vuejs-enomoto-20190928.firebaseapp.com",
    databaseURL: "https://vuejs-enomoto-20190928.firebaseio.com",
    projectId: "vuejs-enomoto-20190928",
    storageBucket: "",
    messagingSenderId: "702123647554",
    appId: "1:702123647554:web:bae13f62ee1e1a272183db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  //store,
  router,
  render: h => h(App),
}).$mount('#app')
