import { Routes, Route, Link } from 'react-router-dom';
import NombreApellido from './components/NombreApellido';
import DatosPersonales from './components/DatosPersonales';
import Estudios from './components/Estudios';
import CursosRealizados from './components/CursosRealizados';
import HabilidadesBlandas from './components/HabilidadesBlandas';
import HabilidadesTecnicas from './components/HabilidadesTecnicas';
import Contacto from './components/Contacto';
import './App.css';

function App() {
    return (
        <div className="contenedor">
            {/* Menú de navegación */}
            <nav className="menu">
                <Link to="/">Inicio</Link>
                <Link to="/datos">Datos</Link>
                <Link to="/estudios">Estudios</Link>
                <Link to="/cursos">Cursos</Link>
                <Link to="/habilidades">Habilidades</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>

            {/* Rutas */}
            <Routes>
                <Route path="/" element={<NombreApellido />} />
                <Route path="/datos" element={<DatosPersonales />} />
                <Route path="/estudios" element={<Estudios />} />
                <Route path="/cursos" element={<CursosRealizados />} />
                <Route path="/habilidades" element={
                    <>
                        <HabilidadesBlandas />
                        <HabilidadesTecnicas />
                    </>
                } />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </div>
    );
}

export default App;
