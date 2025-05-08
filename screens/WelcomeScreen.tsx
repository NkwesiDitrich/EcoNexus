import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Dimensions } from 'react-native';


type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
};

const WelcomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <LinearGradient 
            colors={['#87CEEB', '#AFEEEE', '#E0FFFF']} // Light Blue Gradient - similar to image
            style={styles.container}
        >
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={[styles.headerButton, { marginRight: 10 }]}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.headerButtonText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.headerButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                <Image
                        source={require('../assets/images/logo.png')} // Replace with your logo path
                        style={styles.logo}
                    />
                    <Text style={styles.title}>TrashTracker</Text>
                    <Text style={styles.subtitle}>
                    Track Your Trash. Save Your Planet
                    </Text>
                    {/* <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonText}>More &gt;&gt;</Text>
                    </TouchableOpacity> */}
                </View>

                <Image
                   source={require('../assets/images/image.png')}
                    style={{
                        width: windowWidth * 0.9, // Responsive width
                        height: windowHeight * 0.4, // Responsive height
                        resizeMode: 'contain', // Keep aspect ratio
                        marginTop: 20,
                    }}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.circleContainer}>
                        <View style={[styles.circle, { backgroundColor: '#8FBC8F' }]}>
                            <Text style={styles.circleText}>GLASS</Text>
                        </View>
                        <View style={[styles.circle, { backgroundColor: '#F0E68C' }]}>
                            <Text style={styles.circleText}>PLASTIC</Text>
                        </View>
                        <View style={[styles.circle, { backgroundColor: '#ADD8E6' }]}>
                            <Text style={styles.circleText}>PAPER</Text>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between', // Distribute content vertically
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    headerButton: {
        backgroundColor: 'rgba(255,255,255,0.3)', // Semi-transparent white
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15, // More rounded
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    headerButtonText: {
        color: '#444', // Darker text
        fontWeight: 'bold',
        fontSize: 14,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20, // Add space above the text
    },
    title: {
        fontSize: 28, // Larger title
        fontWeight: 'bold',
        color: '#556B2F', // Dark Olive Green
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#222', // Darker gray
        textAlign: 'center',
        marginBottom: 15,
    },
    moreButton: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    moreButtonText: {
        color: '#006400', // Dark Green
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20, // Add space at the bottom
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    circle: {
        width: 80, // Larger circles
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    circleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    logo: {
        width: 100, // Adjust the width as needed
        height: 100, // Adjust the height as needed
        alignSelf: 'center',
        marginBottom: 20,
    resizeMode: 'contain',
    },
});

export default WelcomeScreen;
