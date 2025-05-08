import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; // Make sure you have this installed

type RootStackParamList = {
    Map: undefined;
    AddReport: undefined;
    History: undefined;
    Profile: undefined;
};

const MenuScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const menuItems = [
        { title: 'View Map', icon: 'map-marked-alt', route: 'Map', color: '#2196F3' }, // Changed from Liquid Waste
        { title: 'Add Report', icon: 'plus-circle', route: 'AddReport', color: '#4CAF50' }, // Changed from Organic Waste
        { title: 'History', icon: 'history', route: 'History', color: '#607D8B' }, // Changed from Construction Waste
        { title: 'Profile', icon: 'user', route: 'Profile', color: '#333333' }, // Changed from Electronic Waste
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                {menuItems.map((item) => (
                    <TouchableOpacity
                        key={item.title}
                        style={[styles.button, { backgroundColor: item.color }]}
                        onPress={() => navigation.navigate(item.route as keyof RootStackParamList)}
                    >
                        <FontAwesome5 name={item.icon} size={24} color="#fff" style={styles.icon} />
                        <Text style={styles.buttonText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the buttons
        padding: 10,
    },
    button: {
        width: '40%', //  40% width for 2 buttons per row
        aspectRatio: 1,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        minWidth: 120,
        maxWidth: 150,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    icon: {},
});
export default MenuScreen;
