<template>
  <div id="misnotas">
    <cabecera @tareaEnviada="introducirNota"/>
    <notas ref="lista_notas"></notas>
  </div>
</template>

<script>
import cabecera from './components/cabecera.vue';
import notas from "./components/notas.vue";

export default {
  name: "misnotas",
  components: {
    cabecera,
    notas,
  },
  data(){
    return {}
  },
  methods: {
    introducirNota(tareaEnviada){
      this.$refs.lista_notas.agregarNota(tareaEnviada);
    }
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
