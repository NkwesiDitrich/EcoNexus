import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
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
            colors={['#87CEEB', '#AFEEEE', '#E0FFFF']}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
                            source={require('../assets/images/logo.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>TrashTracker</Text>
                        <Text style={styles.subtitle}>
                            Track Your Trash. Save Your Planet
                        </Text>
                    </View>

                    <Image
                        source={require('../assets/images/image.png')}
                        style={{
                            width: windowWidth * 0.9,
                            height: windowHeight * 0.4,
                            resizeMode: 'contain',
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
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: { // New style for ScrollView content
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexGrow: 1, // Make sure content can grow to take up space
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
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
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)',
    },
    headerButtonText: {
        color: '#444',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#556B2F',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#222',
        textAlign: 'center',
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    circleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
});

export default WelcomeScreen;
