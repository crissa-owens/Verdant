import { Text, View, StyleSheet, Pressable } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { IconSymbol } from '../ui/icon-symbol';
import AddFriend from './add-friend';

interface LeaderboardProps {
  friends: { name: string }[];
  setFriends: (friends: { name: string }[]) => void;
}

type Entry = {
  name: string;
  sprouts: number;
};
type LeaderboardType = 'friends' | 'global';
type LeaderboardTimeframe = 'weekly' | 'monthly' | 'allTime';

const mockLeaderboardData: Record<
  LeaderboardType,
  Record<LeaderboardTimeframe, Entry[]>
> = {
  friends: {
    weekly: [
      { name: "Alice", sprouts: 150 },
      { name: "Bob", sprouts: 120 },
      { name: "Charlie", sprouts: 100 },
    ],
    monthly: [
      { name: "Alice", sprouts: 420 },
      { name: "Bob", sprouts: 380 },
      { name: "Charlie", sprouts: 350 },
    ],
    allTime: [
      { name: "Alice", sprouts: 1200 },
      { name: "Bob", sprouts: 1100 },
      { name: "Charlie", sprouts: 1000 },
    ],
  },
  global: {
    weekly: [
      { name: "Frank", sprouts: 300 },
      { name: "Grace", sprouts: 250 },
      { name: "Heidi", sprouts: 200 },
    ],
    monthly: [
      { name: "Frank", sprouts: 900 },
      { name: "Grace", sprouts: 800 },
      { name: "Heidi", sprouts: 750 },
    ],
    allTime: [
      { name: "Frank", sprouts: 5000 },
      { name: "Grace", sprouts: 4700 },
      { name: "Heidi", sprouts: 4500 },
    ],
  },
};

export function Leaderboard({ friends, setFriends }: LeaderboardProps) {
  const [addFriendOpen, setAddFriendOpen] = useState(false);
  const [typeValue, setTypeValue] = useState<LeaderboardType>("friends");
  const [timeframeValue, setTimeframeValue] = useState<LeaderboardTimeframe>("weekly");
  const [typeopen, setTypeOpen] = useState(false);
  const [timeframeopen, setTimeframeOpen] = useState(false);
  const [type, setType] = useState([{label: "Friends", value: "friends"}, {label: "Global", value: "global"}]);
  const [timeframe, setTimeframe] = useState([{label: "Weekly", value: "weekly"}, {label: "Monthly", value: "monthly"}, {label: "All Time", value: "allTime"}]);

  const entries = mockLeaderboardData[typeValue][timeframeValue];

  function handlePressEntry(entry: Entry) {
    // Handle entry press, e.g., navigate to profile
  }

  function handleAddFriend() {
    setAddFriendOpen(true);
  }

  if (addFriendOpen) {
    // Render add friend UI (e.g., a modal with search functionality)
    return (
      <AddFriend friends={friends} setFriends={setFriends} setAddFriendOpen={setAddFriendOpen}/>
    );
  }

  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center", marginBottom: 10, justifyContent: "space-between", width: "100%"}}>
          <Text style={styles.title}>Leaderboard</Text>
          <Pressable onPress={() => handleAddFriend()} style={{ padding: 5 }}>
            <IconSymbol name="person.fill.badge.plus" size={35} color="#76c796" />
          </Pressable>
        </View>
        <View style={styles.dropdownContainer}>
        <DropDownPicker
        open={typeopen}
        value={typeValue}
        items={type}
        setOpen={setTypeOpen}
        setValue={setTypeValue}
        setItems={setType}
        containerStyle={{ width: 125 }}
        style={{
            backgroundColor: "#e6e6e6",
            borderColor: "#e6e6e6",
            minHeight: 36,
            paddingHorizontal: 8,
        }}
        labelStyle={{
            fontSize: 14,
            padding: 0,
            margin: 0,
        }}
        textStyle={{
            fontSize: 14,
        }}
        dropDownContainerStyle={{
            backgroundColor: "#e6e6e6",
            borderColor: "#e6e6e6",
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
        containerStyle={{ width: 125 }}
        style={{
            backgroundColor: "#e6e6e6",
            borderColor: "#e6e6e6",
            minHeight: 36,
            paddingHorizontal: 8,
        }}
        labelStyle={{
            fontSize: 14,
            padding: 0,
            margin: 0,
        }}
        textStyle={{
            fontSize: 14,
        }}
        dropDownContainerStyle={{
            backgroundColor: "#e6e6e6",
            borderColor: "#e6e6e6",
        }}
        listItemLabelStyle={{
            fontSize: 14,
        }}
        />
    </View>
      <View style={styles.entry}>
            <Text style={{fontWeight: "bold"}}>Rank</Text>
            <Text style={{fontWeight: "bold"}}>Username</Text>
            <Text style={{fontWeight: "bold"}}>             </Text>
            <Text style={{fontWeight: "bold"}}>Sprouts</Text>
        </View>
      {entries.map((entry, index) => (
        <Pressable key={index} style={styles.entry} onPress={() => handlePressEntry(entry)}>
          <Text>{index + 1}</Text>
          <Text>{entry.name}</Text>
          <Text>             </Text>
          <Text>{entry.sprouts}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "60%",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "100%",
    padding: 10,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    marginBottom: 10,
  }
});