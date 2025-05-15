import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {children}
    </View>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <Text style={styles.bulletPoint}>• {children}</Text>
);

const DocumentationScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📚 Urban Waste Management App Documentation</Text>

            <Section title="🔍 App Purpose">
                <Text style={styles.text}>
                    This app simulates an urban/community waste management system. It lets users submit waste reports, view collection points, and track their eco-contributions using React Native.
                </Text>
            </Section>

            <Section title="🛠️ Simulated Features">
                <Bullet>Waste collection dashboard with total weight, collection points, and estimated next pickup.</Bullet>
                <Bullet>Interactive map of collection points with live status and simulated distances.</Bullet>
                <Bullet>Form to report waste: includes estimated weight, optional photo (placeholder), and location selector.</Bullet>
                <Bullet>History view of previous submissions (mocked data).</Bullet>
                <Bullet>Profile with user rank, progress bar, and badges earned.</Bullet>
            </Section>

            <Section title="🎖️ Ranks">
                <Bullet>Novice Vert – First report or new account</Bullet>
                <Bullet>♻ Recycleur Actif – 5 reports or 10kg</Bullet>
                <Bullet>Éco-Citoyen – 10 reports, 3 waste types</Bullet>
                <Bullet>Recyclo-Star – 25 reports, 50kg</Bullet>
                <Bullet>Éco-Héros – 50 reports, multi-screen usage</Bullet>
                <Bullet>Ambassadeur – Invite 3 friends, share advice</Bullet>
            </Section>

            <Section title="🏅 Badges">
                <Bullet>⏰ Ponctuel – Report 3 days in a row</Bullet>
                <Bullet>♻ Tri Plastique – 5 plastic reports</Bullet>
                <Bullet>🍃 Déchet Vert – 3 organic waste reports</Bullet>
                <Bullet>🧭 Explorateur – Visit 3 unique collection points</Bullet>
                <Bullet>📸 Reporter – Attach photos to 5 reports</Bullet>
                <Bullet>⚡ Recyclage Express – Submit 3 reports in 1 hour</Bullet>
                <Bullet>🗑️ Multi-trieur – Sort all waste types</Bullet>
                <Bullet>🌍 Éco-Influenceur – Invite friends to use the app</Bullet>
                <Bullet>💡 Conseiller – Read 10 eco-tips</Bullet>
            </Section>

            <Section title="💰 Reward System">
                <Text style={styles.text}>
                    For every <Text style={styles.bold}>5000kg</Text> of waste reported (simulated), users receive a symbolic eco-reward of <Text style={styles.bold}>500 FCFA</Text> to promote recycling habits.
                </Text>
            </Section>

            <Section title="🌱 Motivation">
                <Text style={styles.text}>
                    The app uses gamification to promote eco-friendly behavior, regular participation, and community engagement.
                </Text>
            </Section>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 25,
        color: '#2e7d32',
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#388e3c',
    },
    text: {
        fontSize: 14.5,
        color: '#333',
        lineHeight: 22,
    },
    bulletPoint: {
        fontSize: 14.5,
        color: '#444',
        marginBottom: 5,
        paddingLeft: 10,
    },
    bold: {
        fontWeight: 'bold',
        color: '#2e7d32',
    },
});

export default DocumentationScreen;
