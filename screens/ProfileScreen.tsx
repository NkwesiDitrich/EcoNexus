// screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useReportContext } from '../Context/ReportContext';

const mockUser = {
  username: 'Nkwesi Ditich',
  email: 'nkwesiditrich@gmail.com',
  address: 'Eco Nexus 42, Green City',
  invitedFriends: 2,
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
  if (reports.length >= 3) badges.push('⏰ Punctual');
  if (reports.filter(r => r.type.toLowerCase() === 'plastic').length >= 5) badges.push('♻ Plastic Sorter');
  if (reports.filter(r => r.type.toLowerCase() === 'organic').length >= 3) badges.push('🌿 Organic Waste');
  if (visitedPoints.length >= 3) badges.push('📍 Explorer');
  if (reports.length >= 5) badges.push('📷 Reporter');
  if (reports.length >= 3) badges.push('⚡ Express Sorter');
  if (uniqueTypes.length >= 4) badges.push('🧺 Multi-Sorter');
  if (mockUser.invitedFriends >= 3) badges.push('🧑🤝🧑 Influencer');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
      <Text style={styles.info}>👤 Name: {mockUser.username}</Text>
      <Text style={styles.info}>📧 Email: {mockUser.email}</Text>
      <Text style={styles.info}>🏠 Address: {mockUser.address}</Text>
      <Text style={styles.info}>📦 Total Reports: {totalReports}</Text>
      <Text style={styles.info}>⚖️ Total Weight: {totalWeight} kg</Text>
      <Text style={styles.info}>🔁 Waste Types: {uniqueTypes.join(', ')}</Text>
      <Text style={styles.info}>🏅 Rank: {rank}</Text>

      <Text style={styles.subheader}>Badges Unlocked</Text>
      <FlatList
        data={badges}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.badge}>{item}</Text>}
        ListEmptyComponent={<Text>No badges yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subheader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  badge: {
    fontSize: 16,
    paddingVertical: 4,
  },
});
