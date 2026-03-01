import { useContext } from "react";
import { Text, View } from "react-native";
import TaskWidget from "../components/task-widget";
import { NameContext } from "../context/name";
import { styles } from "../styles";
import RewardWidget from "../components/reward-widget";

export default function HomePage() {
  const nameCtxt = useContext(NameContext);
  if (!nameCtxt) throw new Error("NameContext missing");

  return (
    <View style={{ flex: 1}}>
      <View style={ [styles.container, { width: "90%", height: 100 }] }>
        <Text>Hello {nameCtxt.name ? nameCtxt.name : "Guest"}!</Text>
        <Text>What would you like to do today?</Text>
      </View>

      <View style={{ alignSelf: "center", alignItems: "center", rowGap: 20, width: "100%", height: 150 }}>
        <TaskWidget/>
        <RewardWidget/>
      </View>
    </View>
  );
}
