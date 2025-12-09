import '../styles/Villancicos.css';

const VillancicosPage = () => {
  return (
    <main className="carols-container">
      <h1 className="carols-title">Libro de Villancicos</h1>
      
      <div className="carols-layout-static">
        
        <article className="carol-card">
          <h2>Noche de Paz</h2>
          <p>
            Noche de paz, noche de amor,<br />
            Todo duerme en derredor.<br />
            Entre los astros que esparcen su luz,<br />
            Bella anunciando al niñito Jesús,<br />
            Brilla la estrella de paz,<br />
            Brilla la estrella de paz.
          </p>
        </article>

        <article className="carol-card">
          <h2>Mi Burrito Sabanero</h2>
          <p>
            Con mi burrito sabanero, voy camino de Belén.<br />
            Si me ven, si me ven, voy camino de Belén.<br />
            El lucerito mañanero ilumina mi sendero.<br />
            Si me ven, si me ven, voy camino de Belén.<br />
            Tuqui tuqui tuqui tuqui, tuqui tuqui tuqui tá.<br />
            Apúrate mi burrito que ya vamos a llegar.
          </p>
        </article>

        <article className="carol-card">
          <h2>Los Peces en el Río</h2>
          <p>
            Pero mira cómo beben los peces en el río,<br />
            Pero mira cómo beben por ver a Dios nacido.<br />
            Beben y beben y vuelven a beber,<br />
            Los peces en el río por ver a Dios nacer.
          </p>
        </article>

      </div>
    </main>
  );
};

export default VillancicosPage;