import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'; // Hacemos el import del componente
import Bienvenida from './Bienvenida';
function App() {
  let VariableTitulo = 'Hola'; // Podemos crear variables y pasarlas a los componentes
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Componente principal App.js
        </p>

        {/* // Situamos el componente en el HTML */}
        {/* Titulo es una variable que se pasa a la funcion del componente Welcome (prop) */}
        <Welcome titulo={VariableTitulo} idioma="eng"></Welcome> 
        <Welcome titulo="Otro diferente" idioma="esp"></Welcome>

        <Bienvenida principal></Bienvenida>
      </header>
    </div>
  );
}

export default App;
