import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useReportContext } from '../Context/ReportContext';
import { FontAwesome5 } from '@expo/vector-icons'; 

const HistoryScreen = () => {  // Main component
    // Access the reports from the context
    const { reports } = useReportContext(); // Get reports from ReportContext file

   
    const getWasteTypeIcon = (type: string) => { // Function to get the icon based on waste type
        // Convert type to lowercase for case-insensitive comparison
        const typeLower = type.toLowerCase();
        if (typeLower.includes('plastic')) return 'plastic';
        if (typeLower.includes('organic')) return 'leaf';
        if (typeLower.includes('paper')) return 'file-alt';
        if (typeLower.includes('glass')) return 'wine-bottle';
        if (typeLower.includes('metal')) return 'iron';
        return 'trash'; 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Collection History</Text>
            <FlatList // used to rendere a scrollable list of items
                data={reports}
                keyExtractor={(item) => item.id} 
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.index}>{index + 1}.</Text>
                            <FontAwesome5
                                name={getWasteTypeIcon(item.type)}
                                size={20}
                                color="#555" // Icon color
                                style={styles.icon}
                            />
                            <Text style={styles.date}>📅 Date: {item.date}</Text>
                        </View>
                        <Text style={styles.type}>🗑 Waste Type: {item.type}</Text>
                        <Text style={styles.weight}>⚖️ Weight: {item.weight} kg</Text>
                        <Text style={styles.location}>📍 Location: {item.location}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No reports submitted yet.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0', // Light background
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Darker header
        textAlign: 'center',
    },
    card: {
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#fff', // White cards
        borderRadius: 10,
        elevation: 3, // Add shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderWidth: 1,  // Add border
        borderColor: '#e0e0e0', // Light border color

    },
    index: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
        color: '#222',
    },
    date: {
        fontSize: 16,
        color: '#444', // Darker date
        flex: 1,
    },
    type: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    weight: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333', // Darker weight
        marginTop: 5,
    },
    location: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    emptyText: {
        fontSize: 18,
        color: '#888', // Gray text
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
});

export default HistoryScreen;
