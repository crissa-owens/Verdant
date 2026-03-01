import { StyleSheet } from "react-native";
import { AllTasks } from "../components/all-tasks";
import { SproutContext } from "../context/sprout";
import { useContext } from "react";

export default function TaskPage() {
  const context = useContext(SproutContext);

  if (!context) throw new Error("SproutContext missing");
  return <AllTasks sprouts={context.sprouts} setSprouts={context.setSprouts} />;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
