import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {getDatabase, push, remove, onValue, ref, update} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzlz3OfE4wwgBGalLFx02sG9kguDVx5uw",
  authDomain: "lista-2a5b5.firebaseapp.com",
  databaseURL: "https://lista-2a5b5-default-rtdb.firebaseio.com",
  projectId: "lista-2a5b5",
  storageBucket: "lista-2a5b5.firebasestorage.app",
  messagingSenderId: "757201426487",
  appId: "1:757201426487:web:aabc3949daab07547207b2",
  measurementId: "G-CGHWKHZYPZ"
};

const app = initializeApp({
    databaseURL: "https://lista-2a5b5-default-rtdb.firebaseio.com/",
});

const db = getDatabase(app);
const coisas = ref(db, "coisas");

const form = document.getElementById("form-coisas");
const titulo = document.getElementById("titulo");
const lista = document.getElementById("lista-coisas");

form.onsubmit = (e) => {
    e.preventDefault();
    push(coisas, {titulo: titulo.value});
    form.reset();
};

onValue(coisas, (snap) => {
    lista.innerHTML = "";
    snap.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.val().titulo + " ";

        const editar = document.createElement("button");
        editar.textContent = "Editar"
        editar.onclick = () => {
            const novo = prompt("Novo nome:", item.val().titulo)
            if (novo) update(item.ref, { titulo: novo});
        };

        const excluir = document.createElement("button");
        excluir.textContent = "excluir"; 
        excluir.onclick = () => remove(item.ref);

        li.append(editar, excluir);
        lista.append(li);
    });
});
