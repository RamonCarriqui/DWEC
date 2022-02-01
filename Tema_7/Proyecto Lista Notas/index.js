window.onload = () => {
    const tareas = {
        data() {
            return {
                // Variables por defecto
                tareas: [],
                nombre: "",
                descripcion: "",
                prioridad: "",
                estado: false,
                fecha: new Date().toLocaleString(),

            }
        },
        methods: {
            agregar() { // Añade una tarea a la lista
                if (this.nombre && this.prioridad && this.descripcion) {
                    this.tareas.push(
                        {
                            nombre: this.nombre,
                            descripcion: this.descripcion,
                            prioridad: this.prioridad,
                            fecha: this.fecha = new Date(),
                            estado: false

                        });
                        
                    // Limpio los inputs después de cada push
                    this.nombre = "";
                    this.descripcion = "";

                    this.ordenarPrioridad(); // Ordeno al agregar
                        
                    // Cada nueva tarea hay que almacenar el array actualizado en localStorage
                    localStorage.tareas = JSON.stringify(this.tareas);
                }

            },
            cambiarEstado(index) { // Cambia el estado de la tarea alternativamente
                this.tareas[index].estado = !this.tareas[index].estado;
                this.tareas[index].prioridad = 3; // Cuando se realiza la tarea pasa a tener prioridad 3 automáticamente
                
                // Cada vez que se cambia el estado se actualiza la lista guardada del localStorage
                localStorage.tareas = JSON.stringify(this.tareas);
            },
            aumentarPrioridad(index) { // Control de prioridad ordena y actualiza localStorage
                if (this.tareas[index].prioridad > 1) {
                    this.tareas[index].prioridad--;
                    this.ordenarPrioridad();

                    localStorage.tareas = JSON.stringify(this.tareas);
                };
            },
            disminuirPrioridad(index) { // Control de prioridad ordena y actualiza localStorage
                if (this.tareas[index].prioridad < 3) {
                    this.tareas[index].prioridad++;
                    this.ordenarPrioridad();

                    localStorage.tareas = JSON.stringify(this.tareas);
                };
            },
            borrar(index) { // Borra una tarea
                this.tareas.splice(index, 1);

                // Cada vez que borro actualizo lista guardada en local
                localStorage.tareas = JSON.stringify(this.tareas);
            },
            borrarCompletadas() { // Borra todas las tareas completadas (se eliminan por completo)
                this.tareas = JSON.parse(localStorage.tareas);

                completadas = [];
                this.tareas.forEach(tarea => {
                    if (!tarea.estado) {
                        completadas.push(tarea);
                    }
                });
                this.tareas = completadas;
                localStorage.tareas = JSON.stringify(this.tareas); // Actualizo localStorage

            },

            mostrarCompletadas() { // Muestra solo las tareas que tengan estado == true (completadas)
                this.tareas = JSON.parse(localStorage.tareas);

                let completadas = [];
                this.tareas.forEach(tarea => {
                    if (tarea.estado) {
                        completadas.push(tarea);
                    }
                    this.tareas = completadas;
                });

            },
            mostrarNoCompletadas() { // Muestra solo las tareas que tenas esta == false (no completadas)
                this.tareas = JSON.parse(localStorage.tareas);

                let noCompletadas = [];
                this.tareas.forEach(tarea => {
                    if (!tarea.estado) {
                        noCompletadas.push(tarea);
                    }
                    this.tareas = noCompletadas;
                });

            },
            mostrarTodas() { // Muestra todas las tareas (estado true y false)
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
            loginGoogle(){
                var provider = new firebase.auth.GoogleAuthProvider();
                
            }

        },
        computed: {
            finalizadas() {
                let finalizadas = this.tareas.filter(tarea => !tarea.estado).length;
                return finalizadas;
            }
        },
        mounted() { // Cargar localStorage cuando se abre la aplicación
            if (localStorage.tareas) {
                this.tareas = JSON.parse(localStorage.tareas);
            }

        }
    }

    Vue.createApp(tareas).mount('#misnotas');

}

