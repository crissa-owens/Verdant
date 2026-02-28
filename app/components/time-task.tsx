import { Text, View, Pressable, StyleSheet } from "react-native";
import { TimeIncrement } from "./time-increment";
import { useState } from "react";
import { Task } from "../interfaces/task";

interface TimeTaskProps {
  task: Task;
  onBack: () => void;
}

export function TimeTask({ task, onBack }: TimeTaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{task.Title}</Text>
        <Text style={styles.description}>{task.Description}</Text>

        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            {task.SproutValue} Sprouts per {task.PerLinear}
          </Text>
        </View>

        <TimeIncrement/>

        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  rewardContainer: {
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  rewardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2e7d32",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#222",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});