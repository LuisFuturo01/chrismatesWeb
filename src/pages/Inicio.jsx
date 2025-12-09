import '../styles/Inicio.css';

const InicioPage = () => {
  return (
    <main className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">El Invierno es Mágico</h1>
        <p className="welcome-text">
          Siente la alegría y la paz de la temporada. 
          La fecha más esperada del año está aquí.
        </p>
      </div>

      <div className="countdown-container">
        <h2 className="countdown-title">Nuestra Fecha Especial</h2>
        <div className="countdown-timer">
          <div className="timer-unit">
            <span className="timer-value">25</span>
            <span className="timer-label">Diciembre</span>
          </div>
          <div className="timer-unit">
            <span className="timer-value">2025</span>
            <span className="timer-label">Año</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InicioPage;