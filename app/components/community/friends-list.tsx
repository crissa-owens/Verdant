import { StyleSheet, Text, View, ScrollView, Pressable, Platform } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";
import { useState } from "react";
import AddFriend from "./add-friend";

interface FriendsListProps {
  friends: { name: string }[];
  setFriends: (friends: { name: string }[]) => void;
}

export default function FriendsList({ friends, setFriends }: FriendsListProps) {
  const [addFriendOpen, setAddFriendOpen] = useState(false);
  
  function handleAddFriend() {
    setAddFriendOpen(true);
  }

  if (addFriendOpen) {
      // Render add friend UI (e.g., a modal with search functionality)
      return (
        <AddFriend
          friends={friends}
          setFriends={setFriends}
          setAddFriendOpen={setAddFriendOpen}
        />
      );
    }
  
  return (
  <View style={styles.screen}>
    <View style={styles.wrapper}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
      <Text style={styles.title}>Friends</Text>
        <Pressable style={{paddingBottom: 15}} onPress={() => handleAddFriend()}>
          <IconSymbol
            name="person.fill.badge.plus"
            size={30}
            color="#2E8B57" // seagreen
          />
        </Pressable>
      </View>

      {friends.length === 0 ? (
        <View style={styles.emptyState}>
          <IconSymbol
            name="person.3.fill"
            size={80}
            color="#8FBC8F"
          />
          <Text style={styles.emptyText}>No friends yet</Text>
        </View>
      ) : (
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {friends.map((friend, index) => (
            <View key={index} style={styles.friend}>
              <Text style={styles.friendName}>{friend.name}</Text>

              <Pressable
                style={styles.removeButton}
                onPress={() => {
                  setFriends(
                    friends.filter((f) => f.name !== friend.name)
                  );
                }}
              >
                <IconSymbol
                  name="person.fill.badge.minus"
                  size={30}
                  color="#CD853F"
                />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    maxHeight: "100%",
  },

  wrapper: {
    width: "95%",
    maxWidth: 600,
    maxHeight: "95%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#4682B4",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    ...Platform.select({
      ios: {
        marginTop: 20,
      },
    }),
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2F4F4F",
    marginBottom: 20,
  },

  friend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: "#F5FFFA",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0F2E9",
  },

  friendName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2F4F4F",
  },

  removeButton: {
    padding: 6,
  },

  emptyState: {
    alignItems: "center",
    marginTop: 40,
  },

  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: "#6b7280",
  },
});