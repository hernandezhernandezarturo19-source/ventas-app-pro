import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAQaPII0Dz2XxBM7srufScwhY0M56VzUEA",
    authDomain: "ventas-app-pro-63a8c.firebaseapp.com",
    projectId: "ventas-app-pro-63a8c",
    storageBucket: "ventas-app-pro-63a8c.firebasestorage.app",
    messagingSenderId: "564903744439",
    appId: "1:564903744439:web:143f951bd71adf7eb6ce32"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "ventas.html"; // redirige al CRUD
  } catch (error) {
    alert("Error: " + error.message);
  }
};