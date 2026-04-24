import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function GroupDetailsScreen() {
  // useLocalSearchParams "catches" the parameters we passed from the previous screen
  const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subtext}>Group ID: {id}</Text>
      
      <Text style={styles.placeholder}>
        This is where we will add the "Add Expense" button and the list of transactions!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    color: '#888',
    marginBottom: 30,
  },
  placeholder: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 50,
  }
});