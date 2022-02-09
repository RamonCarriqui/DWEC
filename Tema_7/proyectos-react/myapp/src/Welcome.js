function Welcome(props){ // Coge los atributos que recibe de fuera

    // Coge el valor de props, que está en la variable titulo del App principal
    return( 
    <div>
    <h1>Hello, este es el componente Welcome 
    con titulo={props.titulo} e idioma={props.VariableTitulo}</h1>
    <button onClick={pulsarboton}>Activate Lasers</button>
    </div> );
}
function pulsarboton(){
    console.log("pulsado");
}

export default Welcome; // Para exportar el componente y llamarlo desde el componente principal