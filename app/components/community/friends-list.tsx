import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";

interface FriendsListProps {
  friends: { name: string }[];
  setFriends: (friends: { name: string }[]) => void;
}

export default function FriendsList({ friends, setFriends }: FriendsListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
        {friends.length === 0 ? (
          <IconSymbol name="person.3.fill" size={100} color="#ffffff" style={{marginTop: 20}} />
        ) : (
          <ScrollView style={{ width: "100%" }}>
            {friends.map((friend, index) => (
              <View key={index} style={styles.friend}>
                <Text>{friend.name}</Text>
                <Pressable style={{padding: 5, borderRadius: 5, marginLeft: 10 }}
                    onPress={() => {
                        // Mock removing a friend (in a real app, we'd handle this properly)
                        setFriends(friends.filter((f) => f.name !== friend.name));
                    }}
                    >
                    <IconSymbol name="person.fill.badge.minus" size={30} color="#76c796" />
                </Pressable>
              </View>
            ))}
          </ScrollView>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    minWidth: "100%",
  },
  friend: {
    fontSize: 18,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
    minWidth: "100%",
    textAlign: "left",
    color: "#333",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});