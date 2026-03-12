import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

// Componente de categoría
export const CategoryItem = ({ nombre }) => {
  return (
    <TouchableOpacity style={styles.categoryButton}>
      <Text style={styles.categoryText}>{nombre}</Text>
    </TouchableOpacity>
  );
};
