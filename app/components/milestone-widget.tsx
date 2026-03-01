import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MilestoneContext } from "../context/milestone";
import ProgressBar from "./progress-bar";
import { IconSymbol } from "./ui/icon-symbol";

export default function MilestoneWidget() {
  const milestoneCtxt = useContext(MilestoneContext);
  if (!milestoneCtxt) throw new Error("Milestone Context missing");

  const { milestone } = milestoneCtxt;

  if (milestone) {
    return (
      <View style={styles.favorite_task}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {milestone.title}
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 5, right: 10 }}
          onPress={() => {
            milestoneCtxt.setMilestone(null);
          }}
        >
          <IconSymbol name="star" size={36} color="#f2c910" />
        </TouchableOpacity>
        <Text style={{ marginBottom: 10 }}>{milestone.description}</Text>
        <ProgressBar />
      </View>
    );
  } else {
    return (
      <View style={styles.favorite_task}>
        <Text>No Milestone Selected</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favorite_task: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    padding: 20,
    width: "50%",
    height: 150,
  },
});
