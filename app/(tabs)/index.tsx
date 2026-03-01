import { useContext } from "react";
import { Text, View } from "react-native";
import ProgressBar from "../components/progress-bar";
import TaskWidget from "../components/task-widget";
import { NameContext } from "../context/name";
import { TaskContext } from "../context/task";
import { styles } from "../styles";

export default function HomePage() {
  const nameCtxt = useContext(NameContext);
  const taskCtxt = useContext(TaskContext);
  if (!nameCtxt) throw new Error("NameContext missing");
  if (!taskCtxt) throw new Error("TaskContext missing");

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Hello {nameCtxt.name ? nameCtxt.name : "Guest"}!</Text>
        <Text>What would you like to do today?</Text>
      </View>

      <View style={{ alignSelf: "center", alignItems: "center", width: "70%" }}>
        <TaskWidget task={taskCtxt.task} />
      </View>
    </View>
  );
}
