import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set,push } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBaIcbLT6CAYNocye-nxIYNE_a8BLH9WlI",
  authDomain: "fir-v10-58c15.firebaseapp.com",
  databaseURL: "https://fir-v10-58c15-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-v10-58c15",
  storageBucket: "fir-v10-58c15.appspot.com",
  messagingSenderId: "339697362250",
  appId: "1:339697362250:web:2d99277453f1b10c674db3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();


let loginBtn = document.getElementById("createuser");
var storeduser = localStorage.getItem("username");

export  function writeUserDataamt(amountsuccess) {
        // Generate a new reference with an auto-generated key
// const newRef = push(ref(db, 'users'));

// // Get the key generated by push
// const newKey = newRef.key;
// set(ref(db, `users/${newKey}`), {
set(ref(db,"users/" + storeduser), {
balance: amountsuccess
}).then(() => {

console.log("Data written successfully.");
}).catch((error) => {
console.error("Error writing data: ", error);
});
}

