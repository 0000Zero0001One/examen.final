import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Acordeon from "./Acordeon";
import BarraNav from "./BarraNav";
import Cabecera from "./Cabecera";
import FilaColumna from "./FilaColumna";
import Piepagina from "./Piepagina";
import Modales from "./Modales";


function Parte1(props){
    return(
        <div className="parte1"> 
            <h1>Inicio</h1>
            <Acordeon />
        </div>
    );
}

function Parte2(props){
    return(
        <div className="parte2">
            <h1>Oferta de Cursos</h1>
            <FilaColumna />
            <Modales />
            <div>_</div>

        </div>
    );
}

function Principal(props){
    return(
        <div>
            <header>
            <Cabecera />
            </header>

            <nav>
            <BarraNav />
            </nav>
            
            <div className="Contenido">
                <Routes>
                    <Route path="/" element={<Parte1 />}></Route>
                    <Route path="/pag2" element={<Parte2 />}></Route>
                </Routes>
            </div>

            <footer>
              <Piepagina />
            </footer>

        </div>
    );
}

export default Principal;