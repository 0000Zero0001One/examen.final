
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function BarraNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/">Academia Sergio el Bailador</a>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pag2">Oferta de Cursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BarraNav;