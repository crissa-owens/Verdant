import { Text, View, StyleSheet } from 'react-native';
import { Leaderboard } from '../components/community/leaderboard';
import FriendsPage from '../components/community/friends';

export default function Community() {
  return (
    <View style={styles.container}>
        <View style={styles.leaderboardContainer}>
            <Leaderboard />
        </View>
        <FriendsPage />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
    },
    leaderboardContainer: {
        width: '95%',
        minHeight: '50%',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        backgroundColor: '#ffffff',
        marginBottom: 20,
    },
});