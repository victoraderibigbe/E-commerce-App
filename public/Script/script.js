import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpBXEavkwil9WsvLq8ilidjyHEOigBdDg",
  authDomain: "ibuy-ca7a5.firebaseapp.com",
  projectId: "ibuy-ca7a5",
  storageBucket: "ibuy-ca7a5.appspot.com",
  messagingSenderId: "551424000820",
  appId: "1:551424000820:web:ee3b977b08211baa921b61"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementById('signInWithGoogle').addEventListener('click', ()=> {
  signInWithPopup(auth, provider)
  .then((result)=> {
      const user = result.user
      console.log(user)
      window.location.href = 'index.html'
  })
  .catch((error)=> {
      console.log(error)
  })
})