import '../styles/Regalos.css';

const giftsData = [
  { id: 1, name: 'Cámara Vintage', price: '120.00', desc: 'Captura momentos clásicos con estilo retro.', img: 'https://picsum.photos/300/300?random=1' },
  { id: 2, name: 'Reloj de Cuero', price: '85.50', desc: 'Elegancia atemporal para tu muñeca.', img: 'https://picsum.photos/300/300?random=2' },
  { id: 3, name: 'Auriculares Pro', price: '199.99', desc: 'Sonido envolvente y cancelación de ruido.', img: 'https://picsum.photos/300/300?random=3' },
  { id: 4, name: 'Zapatillas Urban', price: '65.00', desc: 'Comodidad para caminar todo el día.', img: 'https://picsum.photos/300/300?random=4' },
  { id: 5, name: 'Mochila Viajera', price: '45.00', desc: 'Espacio suficiente para tu próxima aventura.', img: 'https://picsum.photos/300/300?random=5' },
  { id: 6, name: 'Lentes de Sol', price: '25.00', desc: 'Protección UV con diseño moderno.', img: 'https://picsum.photos/300/300?random=6' },
  { id: 7, name: 'Cafetera Italiana', price: '35.00', desc: 'El mejor espresso hecho en casa.', img: 'https://picsum.photos/300/300?random=7' },
  { id: 8, name: 'Planta Decorativa', price: '15.00', desc: 'Da vida a tu escritorio u oficina.', img: 'https://picsum.photos/300/300?random=8' },
  { id: 9, name: 'Libro Best Seller', price: '22.50', desc: 'Una historia que no podrás dejar de leer.', img: 'https://picsum.photos/300/300?random=9' },
  { id: 10, name: 'Set de Velas', price: '18.00', desc: 'Aromas relajantes para tu hogar.', img: 'https://picsum.photos/300/300?random=10' },
  { id: 11, name: 'Teclado Mecánico', price: '90.00', desc: 'Precisión y sonido clicky para gamers.', img: 'https://picsum.photos/300/300?random=11' },
  { id: 12, name: 'Taza Navideña', price: '12.00', desc: 'Perfecta para el chocolate caliente.', img: 'https://picsum.photos/300/300?random=12' },
  { id: 13, name: 'Bufanda de Lana', price: '28.00', desc: 'Mantente abrigado este invierno.', img: 'https://picsum.photos/300/300?random=13' },
  { id: 14, name: 'Juego de Mesa', price: '40.00', desc: 'Diversión garantizada para la familia.', img: 'https://picsum.photos/300/300?random=14' },
  { id: 15, name: 'Botella Térmica', price: '20.00', desc: 'Mantiene tus bebidas frías o calientes.', img: 'https://picsum.photos/300/300?random=15' },
  { id: 16, name: 'Altavoz Bluetooth', price: '55.00', desc: 'Música potente en tamaño compacto.', img: 'https://picsum.photos/300/300?random=16' },
  { id: 17, name: 'Cuaderno de Notas', price: '10.00', desc: 'Papel premium para tus ideas.', img: 'https://picsum.photos/300/300?random=17' },
  { id: 18, name: 'Lámpara de Mesa', price: '32.00', desc: 'Iluminación cálida y diseño minimalista.', img: 'https://picsum.photos/300/300?random=18' },
  { id: 19, name: 'Caja de Chocolates', price: '24.00', desc: 'Selección gourmet para regalar.', img: 'https://picsum.photos/300/300?random=19' },
  { id: 20, name: 'Smartwatch Fit', price: '110.00', desc: 'Monitorea tu salud y deporte.', img: 'https://picsum.photos/300/300?random=20' },
];

const RegalosPage = () => {
  const itemsRenderizados = [];

  for (let i = 0; i < giftsData.length; i++) {
    const item = giftsData[i];
    itemsRenderizados.push(
      <div key={item.id} className="shop-card">
        <div className="card-inner">
          
          <div className="card-front">
            <img src={item.img} alt={item.name} className="card-img" />
            <div className="card-info">
              <h3>{item.name}</h3>
              <span className="price">${item.price}</span>
            </div>
          </div>

          <div className="card-back">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="back-footer">
              <span className="price-back">${item.price}</span>
              <button className="buy-btn">Agregar al Carrito</button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <main className="shop-container">
      <h1 className="shop-title">Tienda de Regalos Navideños</h1>
      <div className="shop-grid">
        {itemsRenderizados}
      </div>
    </main>
  );
};

export default RegalosPage;