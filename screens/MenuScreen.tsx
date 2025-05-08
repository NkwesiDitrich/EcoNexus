import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

type RootStackParamList = {
  Map: undefined;
  AddReport: undefined;
  History: undefined;
  Profile: undefined;
};

const MenuScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const menuItems = [
    {
      label: 'Make a Report',
      icon: <MaterialIcons name="report" size={28} color="#fff" />,
      color: '#f44336',
      target: 'AddReport',
    },
    {
      label: 'View Map',
      icon: <Feather name="map-pin" size={28} color="#fff" />,
      color: '#4caf50',
      target: 'Map',
    },
    {
      label: 'History',
      icon: <FontAwesome5 name="history" size={24} color="#fff" />,
      color: '#2196f3',
      target: 'History',
    },
    {
      label: 'Profile',
      icon: <Feather name="user" size={28} color="#fff" />,
      color: '#9e9e9e',
      target: 'Profile',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.pageTitle}>Menu</Text>
      <View style={styles.grid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate(item.target as keyof RootStackParamList)}
            activeOpacity={0.8}
          >
            <View style={styles.icon}>{item.icon}</View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 60) / 2; // Medium-sized cards with 20px margin

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    height: cardWidth,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: {
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default MenuScreen;
