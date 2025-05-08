import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useReportContext } from '../Context/ReportContext';


const HistoryScreen = () => {
  const { reports } = useReportContext();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Collection History</Text>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text>{index + 1}. 📅 Date: {item.date}</Text>
            <Text>🗑 Waste Type: {item.type}</Text>
            <Text>⚖️ Weight: {item.weight} kg</Text>
            <Text>📍 Location: {item.location}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No reports submitted yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
});

export default HistoryScreen;
