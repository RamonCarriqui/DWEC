<template>
  <div id="App">
    <router-link to="/">HelloWorld</router-link>
    <br>
    <router-link to="/privado">Area privada</router-link>
    <br>
    <router-link to="/prueba1">Zona de pruebas</router-link>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import privado from './components/privado.vue'

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
