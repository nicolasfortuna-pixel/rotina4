import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue, update, remove,} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyCzlz3OfE4wwgBGalLFx02sG9kguDVx5uw",
  authDomain: "lista-2a5b5.firebaseapp.com",
  projectId: "lista-2a5b5",
  storageBucket: "lista-2a5b5.firebasestorage.app",
  messagingSenderId: "757201426487",
  appId: "1:757201426487:web:aabc3949daab07547207b2",
  measurementId: "G-CGHWKHZYPZ"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app);
const coisas = ref(db, "coisas")

const form = document.getElementById("form-coisas")
const titulo = document.getElementById("titulo")
const lista = document.getElementById("lista-coisas")

form.onsubmit = (e) => {
    e.preventDefault();
    push(coisas, {titulo: titulo.value});
    form.reset();
};