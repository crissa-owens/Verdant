import { useContext } from "react";
import { Text, View, StyleSheet} from "react-native";
import { NameContext } from "../context/name";
import MilestoneWidget from "../components/milestone-widget";
import FavoriteWidget from "../components/favorite-widget";

export default function HomePage() {
  const nameCtxt = useContext(NameContext);
  if (!nameCtxt) throw new Error("NameContext missing");

  return (
  <View style={styles.screen}>
    <View style={styles.header}>
      <Text style={styles.greeting}>
        Hello {nameCtxt.name ? nameCtxt.name : "Guest"}!
      </Text>
      <Text style={styles.subtext}>
        What would you like to do today?
      </Text>
    </View>

    <View style={styles.widgetsContainer}>
      <FavoriteWidget />
      <MilestoneWidget />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5FFFA", // mintcream
    alignItems: "center",
    paddingVertical: 50,
  },

  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  greeting: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2F4F4F", // darkslategrey
  },

  subtext: {
    marginTop: 8,
    fontSize: 16,
    color: "#6b7280",
  },

  widgetsContainer: {
    width: "100%",
    maxWidth: 900,
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
});