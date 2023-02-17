//importar modulos de react / dependencias 
import react from "react";

//funcion del componente
function MiComponente(){

    let nombre = "Juan";
    let web = "jjquintang@gmail.com";

    return (<div className="mi-componente">
                <h2>componente creado</h2>
                <h3>Datos del usuario</h3>
                <ul>
                    <li>Nombre:<strong>{nombre}</strong></li>
                    <li>Web:<strong>{web}</strong></li>
                </ul>
                <p>Este es mi primer componente</p>
                <ul>
                    <li>
                        React
                    </li>
                    <li>
                        Angular
                    </li>
                    <li>
                        Vue
                    </li>
                </ul>
            </div>)
}


//export 
export default MiComponente;