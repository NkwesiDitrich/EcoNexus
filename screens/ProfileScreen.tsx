import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useReportContext } from '../Context/ReportContext';
// import { Avatar } from 'react-native-elements'; //Removed react-native-elements
import { Image } from 'react-native'; //Added Image
import { ScrollView } from 'react-native'; // Import ScrollView

const mockUser = {
    username: 'Nkwesi Ditich',
    email: 'nkwesiditrich@gmail.com',
    address: 'Eco Nexus 42, Green City',
    invitedFriends: 2,
    profilePicture: 'https://via.placeholder.com/100', // Added profile picture URL
};

export default function ProfileScreen() {
    const { reports } = useReportContext();

    const totalReports = reports.length;
    const totalWeight = reports.reduce((sum, r) => sum + parseFloat(r.weight), 0);
    const uniqueTypes = [...new Set(reports.map(r => r.type.toLowerCase()))];
    const visitedPoints = [...new Set(reports.map(r => r.location))];

    // Determine rank
    let rank = '🌱 Novice';
    if (totalReports >= 50 && uniqueTypes.length >= 5) rank = '🧠 Ambassador';
    else if (totalReports >= 25 && totalWeight >= 50) rank = '💪 Recyclo-Star';
    else if (totalReports >= 10 && uniqueTypes.length >= 3) rank = '🌍 Eco-Citizen';
    else if (totalReports >= 5 || totalWeight >= 10) rank = '♻️ Active Sorter';

    // Simulated badges
    const badges = [];
    if (reports.length >= 3) badges.push({ name: '⏰ Punctual', color: '#F44336' });
    if (reports.filter(r => r.type.toLowerCase() === 'plastic').length >= 5) badges.push({ name: '♻ Plastic Sorter', color: '#2196F3' });
    if (reports.filter(r => r.type.toLowerCase() === 'organic').length >= 3) badges.push({ name: '🌿 Organic Waste', color: '#4CAF50' });
    if (visitedPoints.length >= 3) badges.push({ name: '📍 Explorer', color: '#FFC107' });
    if (reports.length >= 5) badges.push({ name: '📷 Reporter', color: '#9C27B0' });
    if (reports.length >= 3) badges.push({ name: '⚡ Express Sorter', color: '#00BCD4' });
    if (uniqueTypes.length >= 4) badges.push({ name: '🧺 Multi-Sorter', color: '#795548' });
    if (mockUser.invitedFriends >= 3) badges.push({ name: '🧑🤝🧑 Influencer', color: '#3F51B5' });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                {/* <Avatar  //Removed react-native-elements
                    rounded
                    size={100}
                    source={{ uri: mockUser.profilePicture }}
                    containerStyle={styles.avatar}
                /> */}
                <Image
                    source={{ uri: mockUser.profilePicture }}  //Added Image
                    style={styles.avatar}
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.header}>{mockUser.username}</Text>
                    <Text style={styles.rank}>Rank: {rank}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>{mockUser.email}</Text>
                <Text style={styles.infoLabel}>Address:</Text>
                <Text style={styles.infoValue}>{mockUser.address}</Text>
            </View>

            <View style={styles.statsContainer}>
                <Text style={styles.subheader}>Statistics</Text>
                <View style={styles.statsGrid}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Total Reports</Text>
                        <Text style={styles.statValue}>{totalReports}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Total Weight</Text>
                        <Text style={styles.statValue}>{totalWeight} kg</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Visited Points</Text>
                        <Text style={styles.statValue}>{visitedPoints.length}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.badgesContainer}>
                <Text style={styles.subheader}>Badges</Text>
                <FlatList
                    data={badges}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={[styles.badge, { backgroundColor: item.color }]}>
                            <Text style={styles.badgeText}>{item.name}</Text>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.noBadgesText}>No badges yet.</Text>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.badgesList}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0', // Light background
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTextContainer: {
        marginLeft: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Darker text
    },
    rank: {
        fontSize: 18,
        color: '#666',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        // marginRight: 20, // Removed react-native-elements margin
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    infoValue: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    statsContainer: {
        marginBottom: 20,
    },
    subheader: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statItem: {
        width: '48%', // Two items per row
        backgroundColor: '#fff', // White background for stats
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2, // Add shadow
    },
    statLabel: {
        fontSize: 14,
        color: '#777',
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    badgesContainer: {
        marginTop: 20,
    },
    badgesList: {
        paddingVertical: 10,
    },
    badge: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 16, // Rounded corners for badges
        marginRight: 10,
        // backgroundColor: '#4CAF50', // Example badge color
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    badgeText: {
        fontSize: 16,
        color: '#fff', // White text on badge
    },
    noBadgesText: {
        fontSize: 16,
        color: '#888',
        fontStyle: 'italic',
    },
});
