import { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";

interface AddFriendProps {
    friends: { name: string }[];
    setFriends: (friends: { name: string }[]) => void;
    setAddFriendOpen: (open: boolean) => void;
}

export default function AddFriend({ friends, setFriends, setAddFriendOpen }: AddFriendProps) {
    const [username, setUsername] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter friend's username"
                value={username}
                onChangeText={setUsername}
            />
            <Pressable style={{ marginTop: 20, backgroundColor: "#76c796", padding: 10, borderRadius: 8 }}
                onPress={() => {
                    // Mock adding a friend (in a real app, you'd search and add the friend properly)
                    setFriends([...friends, { name: username }]);
                    setAddFriendOpen(false);
                }}
                >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Add Friend</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
});