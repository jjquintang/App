import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import {TercerComponente} from './TercerComponente';

function App() {

  const ficha_medica = {
    altura:"187 cm",
    grupo:"H+",
    estado:"Bueno",
    alergias:"Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!
        </p>
        {/*Cargar mi primer componente */}
        <div className='componentes'>
        <hr/>
        <TercerComponente 
        nombre = "Juan"
        apellidos = "Quintana" 
        ficha medica= {ficha_medica}
        />
        <hr/>
        <SegundoComponente/>
        <hr/>
        <MiComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
