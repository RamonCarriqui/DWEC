import React from 'react'; // Importamos la clase necesaria

class Bienvenida extends React.Component {
    mensaje = "Esto está dentro de la clase Bienvenida";
    nombres = [{"nombre":"jose",
                "nombre":15},
                {"nombre":"Mikel",
                "nombre":30}
            ];

    constructor(props) { // En las clases se pasan los datos en el constructor
        super(props); // Necesario porque estamos heredando
        this.pulsarboton = this.pulsarboton.bind(this);

    }
    render() {
        const listNombres = this.nombres.map((nombre) =>
            <li key={index}>{objeto.nombre}</li>
        );

        return (<div>
            <ol>
                {listNombres}
            </ol>
            <h1>Bienvenida comp con mensaje: {this.props.titulo}.</h1>
            <button onClick={this.pulsarboton}>Púlsame</button>

        </div>);
    }
    pulsarboton(e) {
        console.log(e.target);
        console.log("Mensaje = " + this.mensaje);
    }
}

export default Bienvenida;