<template>
  <div>
    <div id="cabecera">
      <h1>TODO WEB APP</h1>

      <label for="tarea">Crea tu nueva tarea </label>
      <input type="text" v-model="nombre" @keyup.enter="agregar" name="tarea" />

      <label for="descripcion"> Descripción </label>
      <input
        type="text"
        v-model="descripcion"
        @keyup.enter="agregar"
        name="descripcion"
      />

      <label for="prioridad">Prioridad</label>
      <select
        @keyup.enter="agregar"
        v-model="prioridad"
        name="prioridad"
        id="prioridad"
      >
        <option value="1">1(Alta)</option>
        <option value="2">2(Media)</option>
        <option value="3">3(Baja)</option>
      </select>

      <button
        @disabled="prioridad == '' || nombre == '' || descripcion == ''"
        @click="agregar"
      >
        Añadir tarea
      </button>
    </div>
    
  </div>
</template>
<script>

export default {
  name: "cabecera",
  props: [],
  data() {
    return {
      nombre: "",
      descripcion: "",
      prioridad: "",      
    };
  },
  emits:['tareaEnviada'], // Creo la emisión
  methods: {
    agregar() {
      // Creo el objeto de la tarea
      if (this.nombre && this.prioridad && this.descripcion) {
        let nota = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          prioridad: this.prioridad,
          fecha: new Date().toLocaleString(),
          estado: false,
        };
        // Emito el objeto nota mediante la emisión creada
        this.$emit("tareaEnviada",nota);

        // Limpio los inputs después de cada push
        this.nombre = "";
        this.descripcion = "";

        
      }
    }
  }
};
</script>
<style scoped>
#cabecera {
  display: flex;
  flex-direction: column;

  background-image: url("../assets/cabecera.png");
  margin-top: 0;
  height: 15rem;
}

#cabecera input {
  margin-left: 25%;
  margin-right: 25%;
}

#cabecera select {
  margin-left: 47%;
  margin-right: 47%;
}

#cabecera button{
  width: 7rem;
  margin-top: 1rem;
  align-self: center;
}

</style>