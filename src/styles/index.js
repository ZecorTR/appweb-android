import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419',
  },
  header: {
    backgroundColor: '#1a2332',
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00d4ff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00d4ff',
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: '#1a2332',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  menuButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#2a3a52',
    alignItems: 'center',
  },
  menuButtonActive: {
    backgroundColor: '#00d4ff',
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginVertical: 15,
    marginTop: 20,
  },
  gameCard: {
    backgroundColor: '#1a2332',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#2a3a52',
  },
  gameImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#2a3a52',
  },
  gameInfo: {
    padding: 15,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: 10,
  },
  platformsLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    marginBottom: 5,
  },
  platformsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  platformTag: {
    backgroundColor: '#2a3a52',
    color: '#00d4ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 11,
    fontWeight: '600',
    marginRight: 8,
    marginBottom: 5,
  },
  resumenLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    marginBottom: 5,
  },
  resumen: {
    fontSize: 13,
    color: '#ccc',
    lineHeight: 18,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '48%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#2a3a52',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  categoryText: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: '600',
  },
});
