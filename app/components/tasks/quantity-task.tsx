import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Task } from "../../interfaces/task";
import { QuantityIncrement } from "./quantity-increment";
import { IconSymbol } from "../ui/icon-symbol.ios";

interface QuantityTaskProps {
  task: Task;
  onBack: () => void;
  onSubmit: (sprouts: number) => void;
  setFavorite: (task: Task) => void;
}

export function QuantityTask({ task, onBack, onSubmit, setFavorite }: QuantityTaskProps) {
    const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={styles.title}>{task.Title}</Text>
          <Pressable onPress={() => setFavorite(task)} style={{ marginLeft: "auto" }}>
            <IconSymbol name="star" size={60} color="#f2c910" />
          </Pressable>
        </View>
        <Text style={styles.description}>{task.Description}</Text>

        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            {task.SproutValue} Sprouts per {task.Threshold} {task.Unit}
          </Text>
        </View>

        <QuantityIncrement quantity={quantity} setQuantity={setQuantity} increment={task.Threshold}/>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onBack}>
            <Text style={styles.buttonText}>Back</Text>
            </Pressable>
            <Pressable disabled={quantity <= 0 || quantity % task.Threshold !== 0} style={styles.button} onPress={() => onSubmit(Math.floor((task.SproutValue * quantity) / task.Threshold))}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#222",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    minWidth: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
