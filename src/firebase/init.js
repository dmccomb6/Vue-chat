import firebase from '@firebase/app';
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDyG3fBQP8Yb2zgas-LL6bcwNRepX0RdwU",
    authDomain: "vue-chat-6145c.firebaseapp.com",
    databaseURL: "https://vue-chat-6145c.firebaseio.com",
    projectId: "vue-chat-6145c",
    storageBucket: "vue-chat-6145c.appspot.com",
    messagingSenderId: "165703836943",

  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  //Export database
  export default firebaseApp.firestore()