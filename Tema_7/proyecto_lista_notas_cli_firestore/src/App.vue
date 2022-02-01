<template>
  <div id="misnotas">
    <cabecera @tareaEnviada="introducirNota" />
    <!-- Si usuario existe entonces se muestra notas -->
    <notas v-show="usuario" ref="lista_notas"></notas>
    <button @click="loginGoogle">Acceder con Google</button>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import cabecera from "./components/cabecera";
import notas from "./components/notas";
import './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { collection, doc, setDoc, onSnapshot} from "firebase/firestore";
export default {
  name: "misnotas",
  components: {
    cabecera,
    notas,
  },
  data() {
    return {
      usuario:null
    };
  },
  methods: {
    introducirNota(tareaEnviada) {
      this.$refs.lista_notas.agregarNota(tareaEnviada);
    },
    loginGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          console.log(result.user);
          this.usuario=result.user; // Asigno el usuario logueado a la variable usuario
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error.message);
          //const errorCode = error.code;
          //const errorMessage = error.message;
          // The email of the user's account used.
          //const email = error.email;
          // The AuthCredential type that was used.
          //const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    logout(){
      const auth = getAuth();
      signOut(auth).then ( ()=> this.usuario = ''); // Dejo la variable usuario vacía 
    },
  },
};
</script>

<style>
#misnotas {
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  margin-left: 20%;
  margin-right: 20%;
  padding: 0.5rem;
  background-color: #883333;
  border: 2px solid #ccc;
  text-align: center;
}
</style>
