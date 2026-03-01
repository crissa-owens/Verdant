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
      <View style={styles.milestone}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {milestone.title}
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 5, right: 10 }}
          onPress={() => {
            milestoneCtxt.setMilestone(null);
          }}
        >
          <IconSymbol name="star.fill" size={36} color="#f2c910" />
        </TouchableOpacity>
        <Text style={{ marginBottom: 10 }}>{milestone.description}</Text>
        <ProgressBar />
      </View>
    );
  } else {
    return (
      <View style={styles.milestone}>
        <Text>No Milestone Selected</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  milestone: {
  position: "relative",
  backgroundColor: "#ffffff",
  borderRadius: 20,
  padding: 24,
  width: "90%",
  maxWidth: 600,
  minHeight: 160,

  shadowColor: "#4682B4",
  shadowOpacity: 0.12,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 6 },
  elevation: 4,
},
});
