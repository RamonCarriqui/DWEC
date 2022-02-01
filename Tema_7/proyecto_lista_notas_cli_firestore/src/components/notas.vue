<template>
    <div>
        <div id="notas" v-for="(tarea, index) in tareas" :key="index">
      <ul>
        <li
          id="titulo"
          v-bind:class="{ normal: !tarea.estado, completada: tarea.estado }"
          @click="cambiarEstado(index)"
        >
          {{ tarea.nombre }}
        </li>
        <li
          v-bind:class="{ normal: !tarea.estado, completada: tarea.estado }"
          @click="cambiarEstado(index)"
        >
          {{ tarea.descripcion }}
        </li>
        <li
          v-bind:class="{ normal: !tarea.estado, completada: tarea.estado }"
          @click="cambiarEstado(index)"
        >
          Prioridad: {{ tarea.prioridad }}
        </li>
        <li
          v-bind:class="{ normal: !tarea.estado, completada: tarea.estado }"
          @click="cambiarEstado(index)"
        >
          {{ tarea.fecha }}
        </li>
        <div id="botonera">
          <button @click="borrar(index)">Borrar</button>
          <button @click="aumentarPrioridad(index)">Aumentar Prioridad</button>
          <button @click="disminuirPrioridad(index)">Bajar Prioridad</button>
        </div>
        <hr />
      </ul>
    </div>
    <div id="footer2">
      <p>
        Tienes {{ tareas.length }} tareas y {{ finalizadas }} sin completar.
      </p>
      <br />
      <button @click="borrarCompletadas">Borrar tareas completadas</button>
      <button @click="mostrarCompletadas">Mostrar completadas</button>
      <button @click="mostrarNoCompletadas">Mostrar sin completar</button>
      <button @click="mostrarTodas">Mostrar toda las tareas</button>
    </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      tareas: [],
    };
  },methods: {
    agregarNota(tareaEnviada){
        this.tareas.push(tareaEnviada);
        this.ordenarPrioridad();
    },
    cambiarEstado(index) {
      // Cambia el estado de la tarea alternativamente
      this.tareas[index].estado = !this.tareas[index].estado;
      this.tareas[index].prioridad = 3; // Cuando se realiza la tarea pasa a tener prioridad 3 automáticamente

      // Cada vez que se cambia el estado se actualiza la lista guardada del localStorage
      localStorage.tareas = JSON.stringify(this.tareas);
    },
    aumentarPrioridad(index) {
      // Control de prioridad ordena y actualiza localStorage
      if (this.tareas[index].prioridad > 1) {
        this.tareas[index].prioridad--;
        this.ordenarPrioridad();

        localStorage.tareas = JSON.stringify(this.tareas);
      }
    },
    disminuirPrioridad(index) {
      // Control de prioridad ordena y actualiza localStorage
      if (this.tareas[index].prioridad < 3) {
        this.tareas[index].prioridad++;
        this.ordenarPrioridad();

        localStorage.tareas = JSON.stringify(this.tareas);
      }
    },
    borrar(index) {
      // Borra una tarea
      this.tareas.splice(index, 1);

      // Cada vez que borro actualizo lista guardada en local
      localStorage.tareas = JSON.stringify(this.tareas);
    },
    borrarCompletadas() {
      // Borra todas las tareas completadas (se eliminan por completo)
      this.tareas = JSON.parse(localStorage.tareas);

      let completadas = [];
      this.tareas.forEach((tarea) => {
        if (!tarea.estado) {
          completadas.push(tarea);
        }
      });
      this.tareas = completadas;
      localStorage.tareas = JSON.stringify(this.tareas); // Actualizo localStorage
    },

    mostrarCompletadas() {
      // Muestra solo las tareas que tengan estado == true (completadas)
      this.tareas = JSON.parse(localStorage.tareas);

      let completadas = [];
      this.tareas.forEach((tarea) => {
        if (tarea.estado) {
          completadas.push(tarea);
        }
        this.tareas = completadas;
      });
    },
    mostrarNoCompletadas() {
      // Muestra solo las tareas que tenas esta == false (no completadas)
      this.tareas = JSON.parse(localStorage.tareas);

      let noCompletadas = [];
      this.tareas.forEach((tarea) => {
        if (!tarea.estado) {
          noCompletadas.push(tarea);
        }
        this.tareas = noCompletadas;
      });
    },
    mostrarTodas() {
      // Muestra todas las tareas (estado true y false)
      this.tareas = JSON.parse(localStorage.tareas);
    },
    ordenarPrioridad() {
                this.tareas = this.tareas.sort((a, b) => {
                    if (a.prioridad < b.prioridad) {
                        return -1;
                    } else if (a.prioridad > b.prioridad) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                localStorage.tareas = JSON.stringify(this.tareas);
            },
  },
  computed: {
    finalizadas() {
      let finalizadas = this.tareas.filter((tarea) => !tarea.estado).length;
      return finalizadas;
    },
  },
    
}
</script>
<style scoped>
    #notas ul {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  background-color: #ffe798;
}

#notas li {
  list-style: none;
  text-align: left;
}

#botonera {
  display: flex;
  align-content: center;
}

.completada {
  color: red;
  text-decoration: line-through;
}

.normal {
  color: black;
}

button {
  margin: 1rem;
  width: 7rem;
  align-self: center;
}
#footer2 {
  background-color: black;
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

#footer2 > p {
  margin-left: 1rem;
  color: white;
}

#footer2 button {
  margin-left: 5rem;
}
</style>