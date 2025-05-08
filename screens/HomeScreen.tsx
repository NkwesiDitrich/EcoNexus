import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useReportContext } from '../Context/ReportContext';
import { collectionPoints } from '../data/mockData';

type RootStackParamList = {
  Menu: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { reports } = useReportContext();

  // Simulated stats
  const totalWaste = reports.reduce((sum, r) => sum + parseFloat(r.weight), 0);
  const totalPoints = collectionPoints.length;
  const nextCollection = 'Tuesday, March 12, 2025 at 10:00 AM';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total Waste Collected:</Text>
        <Text style={styles.value}>{totalWaste.toFixed(2)} kg</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Number of Collection Points:</Text>
        <Text style={styles.value}>{totalPoints}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Next Estimated Collection:</Text>
        <Text style={styles.value}>{nextCollection}</Text>
      </View>

      <Button title="Open Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: { fontSize: 16, color: '#333' },
  value: { fontSize: 18, fontWeight: 'bold', color: '#000' },
});

export default HomeScreen;
