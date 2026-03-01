import { Text, View, Pressable, StyleSheet, Platform } from "react-native";
import { Task } from "../../interfaces/task";
import { IconSymbol } from "../ui/icon-symbol.ios";
import { useState } from "react";
import { SFSymbol } from "expo-symbols";


interface EventTaskProps {
  task: Task;
  onBack: () => void;
  onSubmit: (sprouts: number) => void;
  setFavorite: (task: Task | null) => void;
}

export function EventTask({ task, onBack, onSubmit, setFavorite }: EventTaskProps) {
  const [starIcon, setStarIcon] = useState("star");
  function handleFavorite(task: Task) {
    if (starIcon === "star") {
      setFavorite(task);
      setStarIcon("star.fill");
    } else {
      setFavorite(null);
      setStarIcon("star");
    }
  }  
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
         <View style={{ flexDirection: "row", marginBottom: 20 }}>
                  <Text style={styles.title}>{task.Title}</Text>
                  <Pressable onPress={() => handleFavorite(task)} style={{ marginLeft: "auto" }}>
                    <IconSymbol name={starIcon as SFSymbol} size={60} color="#f2c910" />
                  </Pressable>
                </View>
        <Text style={styles.description}>{task.Description}</Text>

        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            {task.SproutValue} Sprouts per {task.Threshold} {task.Unit}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onBack}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => onSubmit(task.SproutValue / task.Threshold)}
          >
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
    ...Platform.select({
      ios: {
        width: "90%",
        padding: 20,
      },
      web: {
        width: "70%",
        padding: 30,
      },
    }),
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
