import { Stack } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const polls = [1, 2, 4];

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Polls' }} />
      <FlatList
        data={polls}
        contentContainerStyle={styles.container}
        renderItem={() => (
          <View style={styles.pollContainer}>
            <Text style={styles.pollTitle}>Example Poll Question</Text>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  pollContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  pollTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
