import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useReportContext } from '../Context/ReportContext';
import { useEffect, useState } from 'react';
import { collectionPoints } from '../data/mockData'; // pretend this fetches dynamic data
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons

type RootStackParamList = {
    Menu: undefined;
};

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { reports } = useReportContext();

    // Simulated stats
    const totalWaste = reports.reduce((sum, r) => sum + parseFloat(r.weight), 0);
    const totalPoints = collectionPoints.length; // Use collectionPoints directly
    const nextCollection = 'Tuesday, March 12, 2025 at 10:00 AM';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📊 Dashboard</Text>

            <View style={styles.infoGrid}>
                <View style={styles.infoCard}>
                    <FontAwesome5 name="trash-restore" size={30} color="#4CAF50" style={styles.icon} />
                    <Text style={styles.label}>Total Waste Collected</Text>
                    <Text style={styles.value}>{totalWaste.toFixed(2)} kg</Text>
                </View>

                <View style={styles.infoCard}>
                    <FontAwesome5 name="map-marker-alt" size={30} color="#2196F3" style={styles.icon} />
                    <Text style={styles.label}>Collection Points</Text>
                    <Text style={styles.value}>{totalPoints}</Text>
                </View>

                <View style={styles.infoCard}>
                    <FontAwesome5 name="calendar-check" size={30} color="#FFC107" style={styles.icon} />
                    <Text style={styles.label}>Next Collection</Text>
                    <Text style={styles.value}>{nextCollection}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.menuButtonText}>Open Menu</Text>
                <FontAwesome5 name="bars" size={20} color="#fff" style={styles.menuIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center', // Center content horizontally
        backgroundColor: '#f0f0f0', // Light background
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333', // Darker title
    },
    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Space between cards
        width: '100%',
    },
    infoCard: {
        backgroundColor: '#fff', // White cards
        width: '45%', // Two cards per row
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center', // Center content inside card
        elevation: 3, // Add shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        minHeight: 120,  //give it a minimum height
        justifyContent: 'space-between' // Distribute space between elements
    },
    label: {
        fontSize: 16,
        color: '#555', // Medium gray label
        marginTop: 8,

    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222', // Very dark text
        marginTop: 5,
    },
    menuButton: {
        backgroundColor: '#4CAF50', // Green button
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'center'
    },
    menuButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    icon: {
        alignSelf: 'center'
    },
    menuIcon: {
        marginLeft: 10,
    }
});

export default HomeScreen;
