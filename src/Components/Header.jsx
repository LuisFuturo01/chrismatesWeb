import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="christmas-header">
      <div className="header-content">
        <div className="brand-area">
          <Link to="/" className="brand-link">
            Navidad <span className="brand-gold">Mágica</span>
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-item">Inicio</Link>
          <Link to="/regalos" className="nav-item">Lista de Regalos</Link>
          <Link to="/villancicos" className="nav-item">Villancicos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;