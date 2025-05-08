import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { collectionPoints } from '../data/mockData';

export default function MapScreen() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🗺 Collection Points Map</Text>

      <Image
         source={require('../assets/images/map.png')} 
        style={[styles.mapImage, { width: '60%', height: 250 }]} // Full width and proper height
        resizeMode="cover"
      />

      <FlatList
        data={collectionPoints}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.pointCard}>
            <Text style={styles.name}>📍 {item.name}</Text>
            <Text>🧺 Type: {item.type}</Text>
            <Text>📦 Status: {item.status}</Text>
            <Text>📏 Distance: {item.distance}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No collection points found.</Text>}
        scrollEnabled={false} // since wrapped in ScrollView
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 15,
  },
  mapImage: {
    borderRadius: 0,
    marginBottom: 20,
  },
  pointCard: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
