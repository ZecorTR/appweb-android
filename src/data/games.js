const juegosDestacados = [
  {
    id: '1',
    titulo: 'Elden Ring',
    imagen: 'https://via.placeholder.com/300x400?text=Elden+Ring',
    plataformas: ['PlayStation 5', 'Xbox Series X', 'PC'],
    resumen: 'La nueva obra maestra de FromSoftware. Un mundo abierto oscuro y épico lleno de misterios y desafíos.'
  },
  {
    id: '2',
    titulo: 'The Legend of Zelda: Tears of the Kingdom',
    imagen: 'https://pbs.twimg.com/media/GA0pJ7GXUAARGOr?format=jpg&name=medium',
    plataformas: ['Nintendo Switch'],
    resumen: 'La continuación de Breath of the Wild. Explora Hyrule con nuevos poderes y mecánicas innovadoras.'
  },
  {
    id: '3',
    titulo: 'Baldur\'s Gate 3',
    imagen: 'https://via.placeholder.com/300x400?text=Baldurs+Gate+3',
    plataformas: ['PlayStation 5', 'Xbox Series X', 'PC'],
    resumen: 'RPG de fantasía épico basado en D&D 5e. Toma decisiones que definen tu historia única.'
  }
];

// Función simulada de API para obtener los juegos destacados
export const getJuegosDestacados = () => {
  return juegosDestacados;
};

// También puedes exportar directamente el array si prefieres
export { juegosDestacados };
