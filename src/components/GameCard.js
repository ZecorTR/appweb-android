import { Text, View, Image } from 'react-native';
import { styles } from '../styles';

// Componente para las tarjetas de juegos
export const GameCard = ({ titulo, imagen, plataformas, resumen }) => {
  return (
    <View style={styles.gameCard}>
      <Image 
        source={{ uri: imagen }} 
        style={styles.gameImage}
      />
      <View style={styles.gameInfo}>
        <Text style={styles.gameTitle}>{titulo}</Text>
        
        <Text style={styles.platformsLabel}>Plataformas:</Text>
        <View style={styles.platformsContainer}>
          {plataformas.map((plat, idx) => (
            <Text key={idx} style={styles.platformTag}>{plat}</Text>
          ))}
        </View>
        
        <Text style={styles.resumenLabel}>Resumen:</Text>
        <Text style={styles.resumen}>{resumen}</Text>
      </View>
    </View>
  );
};
