import { useContext } from "react";
import { Text, View } from "react-native";
import TaskWidget from "../components/task-widget";
import { NameContext } from "../context/name";
import { styles } from "../styles";

export default function HomePage() {
  const nameCtxt = useContext(NameContext);
  if (!nameCtxt) throw new Error("NameContext missing");

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Hello {nameCtxt.name ? nameCtxt.name : "Guest"}!</Text>
        <Text>What would you like to do today?</Text>
      </View>

      <View style={{ alignSelf: "center", alignItems: "center", width: "70%" }}>
        <TaskWidget/>
      </View>
    </View>
  );
}
