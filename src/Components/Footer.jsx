import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  
  return (
    <footer className="christmas-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Navidad Mágica</h3>
          <p>Celebra el espíritu.</p>
        </div>
        
        <div className="footer-links">
          <Link to="/">Inicio</Link> 
          <Link to="/regalos">Regalos</Link> 
          <Link to="/villancicos">Villancicos</Link>
        </div>

        <div className="footer-copy">
          <p>&copy; INF-122 navidad moment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;