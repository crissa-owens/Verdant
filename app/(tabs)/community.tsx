import { View, StyleSheet, useWindowDimensions, Platform } from "react-native";
import { Leaderboard } from "../components/community/leaderboard";
import FriendsList from "../components/community/friends-list";
import { useState } from "react";

export default function Community() {
  const [friends, setFriends] = useState<{ name: string }[]>([]);
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === "web" && width > 900;
  return (
    <View style={[styles.container, isDesktop && styles.desktopContainer]}>
      <View style={styles.module}>
        <View style={styles.leaderboardContainer}>
            <Leaderboard friends={friends} setFriends={setFriends} />
        </View>
      </View>

      <View style={styles.module}>
        <FriendsList friends={friends} setFriends={setFriends} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desktopContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  module: {
    width: "100%",
    maxWidth: 700,
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5FFFA",
    paddingTop: 10,
    justifyContent: "center",
  },
  leaderboardContainer: {
    width: "95%",
    minHeight: "50%",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    backgroundColor: "#ffffff",
  },
});
