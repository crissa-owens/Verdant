import { Text, View, StyleSheet, Pressable, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

interface LeaderboardProps {
  friends: { name: string }[];
  setFriends: (friends: { name: string }[]) => void;
}

type Entry = {
  name: string;
  sprouts: number;
};
type LeaderboardType = "friends" | "global";
type LeaderboardTimeframe = "weekly" | "monthly" | "allTime";

const mockLeaderboardData: Record<
  LeaderboardType,
  Record<LeaderboardTimeframe, Entry[]>
> = {
  friends: {
    weekly: [
      { name: "Alice", sprouts: 150 },
      { name: "Bob", sprouts: 120 },
      { name: "Charlie", sprouts: 100 },
      { name: "David", sprouts: 80 },
    ],
    monthly: [
      { name: "Alice", sprouts: 420 },
      { name: "Bob", sprouts: 380 },
      { name: "Charlie", sprouts: 350 },
      { name: "David", sprouts: 300 },
    ],
    allTime: [
      { name: "Alice", sprouts: 1200 },
      { name: "Bob", sprouts: 1100 },
      { name: "Charlie", sprouts: 1000 },
      { name: "David", sprouts: 900 },
    ],
  },
  global: {
    weekly: [
      { name: "Frank", sprouts: 300 },
      { name: "Grace", sprouts: 250 },
      { name: "Heidi", sprouts: 200 },
      { name: "Ivan", sprouts: 150 },
    ],
    monthly: [
      { name: "Frank", sprouts: 900 },
      { name: "Grace", sprouts: 800 },
      { name: "Heidi", sprouts: 750 },
      { name: "Ivan", sprouts: 700 },
    ],
    allTime: [
      { name: "Frank", sprouts: 5000 },
      { name: "Grace", sprouts: 4700 },
      { name: "Heidi", sprouts: 4500 },
      { name: "Ivan", sprouts: 4300 },
    ],
  },
};

export function Leaderboard({ friends, setFriends }: LeaderboardProps) {
  const [typeValue, setTypeValue] = useState<LeaderboardType>("friends");
  const [timeframeValue, setTimeframeValue] =
    useState<LeaderboardTimeframe>("weekly");
  const [typeopen, setTypeOpen] = useState(false);
  const [timeframeopen, setTimeframeOpen] = useState(false);
  const [type, setType] = useState([
    { label: "Friends", value: "friends" },
    { label: "Global", value: "global" },
  ]);
  const [timeframe, setTimeframe] = useState([
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
    { label: "All Time", value: "allTime" },
  ]);

  const entries = mockLeaderboardData[typeValue][timeframeValue];

  function handlePressEntry(entry: Entry) {
    // Handle entry press, e.g., navigate to profile
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={styles.title}>Leaderboard</Text>
      </View>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={typeopen}
          value={typeValue}
          items={type}
          setOpen={setTypeOpen}
          setValue={setTypeValue}
          setItems={setType}
          containerStyle={{ width: 160 }}
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#8FBC8F",
            minHeight: 40,
          }}
          dropDownContainerStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#8FBC8F",
          }}
          labelStyle={{
            fontSize: 14,
            padding: 0,
            margin: 0,
          }}
          textStyle={{
            fontSize: 14,
          }}
          listItemLabelStyle={{
            fontSize: 14,
          }}
        />
        <Text style={{ marginHorizontal: 10 }}></Text>
        <DropDownPicker
          open={timeframeopen}
          value={timeframeValue}
          items={timeframe}
          setOpen={setTimeframeOpen}
          setValue={setTimeframeValue}
          setItems={setTimeframe}
          containerStyle={{ width: 160 }}
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#8FBC8F",
            minHeight: 40,
          }}
          dropDownContainerStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#8FBC8F",
          }}
          labelStyle={{
            fontSize: 14,
            padding: 0,
            margin: 0,
          }}
          textStyle={{
            fontSize: 14,
          }}
          listItemLabelStyle={{
            fontSize: 14,
          }}
        />
      </View>
      <View style={styles.tableContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Rank</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Username</Text>
        <Text style={[styles.headerText, { width: 100, textAlign: "right" }]}>
          Sprouts
        </Text>
      </View>
      {entries.map((entry, index) => (
        <Pressable
          key={index}
          style={[
            styles.entry,
            index % 2 === 0 ? { backgroundColor: "#ECFDF5" } : { backgroundColor: "#F5FFFA" },
          ]}
          onPress={() => handlePressEntry(entry)}
        >
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.username}>{entry.name}</Text>
            <Text style={styles.sprouts}>{entry.sprouts}</Text>
        </Pressable>
      ))}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // mintcream
    alignItems: "center",
  },
  tableContainer: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "60%",
    marginBottom: 10,
    zIndex: 1000,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2F4F4F",
  },
  entry: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 4,
    backgroundColor: "#F5FFFA",
    ...(Platform.OS === "web" && {
      cursor: "pointer",
    }),
  },
  rank: {
    width: 50,
    fontWeight: "600",
    color: "#4682B4", // slateblue
  },

  username: {
    flex: 1,
    fontWeight: "500",
    color: "#2F4F4F",
  },

  sprouts: {
    width: 100,
    textAlign: "right",
    fontWeight: "600",
    color: "#2E8B57",
  },

  wrapper: {
    width: "100%",
    maxWidth: 800,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#4682B4",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  headerRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0F2E9",
    marginBottom: 12,
  },

  headerText: {
    width: 50,
    fontWeight: "700",
    color: "#2F4F4F",
  },
});
