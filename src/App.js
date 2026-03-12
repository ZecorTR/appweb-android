import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { GameCard } from './components/GameCard';
import { CategoryItem } from './components/CategoryItem';
import { getJuegosDestacados } from './data/games';


// Categorías de videojuegos
const categorias = [
  { id: '1', nombre: 'Acción' },
  { id: '2', nombre: 'RPG' },
  { id: '3', nombre: 'Aventura' },
  { id: '4', nombre: 'Estrategia' },
  { id: '5', nombre: 'Deportes' },
  { id: '6', nombre: 'Puzzle' },
];

// Pantalla principal
export default function App() {
  const [menuActivo, setMenuActivo] = useState('inicio');

  // Obtener los juegos destacados desde la "API"
  const juegosDestacados = getJuegosDestacados();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GAMESFULL</Text>
      </View>

      {/* Menú de navegación */}
      <View style={styles.menu}>
        <TouchableOpacity 
          style={[styles.menuButton, menuActivo === 'inicio' && styles.menuButtonActive]}
          onPress={() => setMenuActivo('inicio')}
        >
          <Text style={styles.menuButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.menuButton, menuActivo === 'catalogo' && styles.menuButtonActive]}
          onPress={() => setMenuActivo('catalogo')}
        >
          <Text style={styles.menuButtonText}>Catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.menuButton, menuActivo === 'favoritos' && styles.menuButtonActive]}
          onPress={() => setMenuActivo('favoritos')}
        >
          <Text style={styles.menuButtonText}>Favoritos</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Sección de juegos destacados */}
        <Text style={styles.sectionTitle}>Juegos Destacados</Text>
        
        {juegosDestacados.map((juego) => (
          <GameCard 
            key={juego.id}
            titulo={juego.titulo}
            imagen={juego.imagen}
            plataformas={juego.plataformas}
            resumen={juego.resumen}
          />
        ))}

        {/* Sección de categorías */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>📂 Categorías</Text>
          <View style={styles.categoriesGrid}>
            {categorias.map((cat) => (
              <CategoryItem key={cat.id} nombre={cat.nombre} />
            ))}
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}
