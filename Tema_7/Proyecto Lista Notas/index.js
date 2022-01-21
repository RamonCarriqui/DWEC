window.onload = () => {
    const tareas = {
        data() {
            return {
                // Variables por defecto
                tareas: [],
                nombre: "",
                descripcion: "",
                fecha: new Date()
                // Falta añadir sistema de prioridad

            }
        },
        methods: {
            agregar() { // Añade una tarea a la lista
                this.tareas.push(
                    {
                        nombre: this.nombre,
                        descripcion: this.descripcion,
                        fecha: this.fecha = new Date(),
                        estado: false

                    });
                // Limpio los inputs después de cada push
                this.nombre = "";
                this.descripcion = "";

                // Cada nueva tarea hay que almacenar el array actualizado en localStorage
                localStorage.tareas = JSON.stringify(this.tareas);
            },
            cambiarEstado(index) { // Cambia el estado de la tarea alternativamente
                this.tareas[index].estado = !this.tareas[index].estado;
                // Cada vez que se cambia el estado se actualiza la lista guardada del localStorage
                localStorage.tareas = JSON.stringify(this.tareas);
            },
            borrar(index) { // Borra una tarea
                this.tareas.splice(index, 1);
                // Cada vez que borro actualizo lista guardada en local
                localStorage.tareas = JSON.stringify(this.tareas);
            },
            borrarCompletadas() { // Borra todas las tareas completadas
                completadas = [];
                this.tareas.forEach(tarea => { // Almaceno en un nuevo array las completadas y actualizo el array principal
                    if (tarea.estado) {
                        completadas.push(tarea);
                    }
                });
                this.tareas = completadas;
                localStorage.tareas = JSON.stringify(this.tareas); // Actualizo el localStorage
            },

        },
        computed: {
            finalizadas() {
                let finalizadas = this.tareas.filter(tarea => !tarea.estado).length;
                return finalizadas;
            }
        },
        mounted() { // Cargar localStorage cuando se abre la aplicación
            if (localStorage.tareas) {
                this.tareas = JSON.parse(localStorage.tareas)
            }


        }
    }

    Vue.createApp(tareas).mount('#misnotas');
}
