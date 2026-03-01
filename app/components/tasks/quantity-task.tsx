import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Task } from "../../interfaces/task";
import { QuantityIncrement } from "./quantity-increment";
import { IconSymbol } from "../ui/icon-symbol";
import { SFSymbol } from "expo-symbols";

interface QuantityTaskProps {
  task: Task;
  onBack: () => void;
  onSubmit: (sprouts: number) => void;
  setFavorite: (task: Task | null) => void;
}

export function QuantityTask({ task, onBack, onSubmit, setFavorite }: QuantityTaskProps) {
  const [quantity, setQuantity] = useState(0);
  const isDisabled = quantity <= 0 || quantity % task.Threshold !== 0;
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
  function handleSubmit() {
    onSubmit(Math.floor((task.SproutValue * quantity) / task.Threshold));
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
         <View style={styles.headerRow}>
            <Text style={styles.title} numberOfLines={2}>
              {task.Title}
            </Text>

            <Pressable onPress={() => handleFavorite(task)}>
              <IconSymbol
                name={starIcon as "star" | "star.fill"}
                size={34}
                color={starIcon === "star.fill" ? "#f2c910" : "#94a3b8"}
              />
            </Pressable>
          </View>
        <Text style={styles.description}>{task.Description}</Text>

        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            {task.SproutValue} Sprouts per {task.Threshold} {task.Unit}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <QuantityIncrement quantity={quantity} setQuantity={setQuantity} increment={task.Threshold}/>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.backButton]} onPress={onBack}>
            <Text style={[styles.buttonText, styles.backButtonText]}>
              Back
            </Text>
          </Pressable>
          <Pressable
              disabled={isDisabled}
              style={[
                styles.button,
                isDisabled ? styles.disabledButton : styles.submitButton,
              ]}
              onPress={handleSubmit}
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
    backgroundColor: "#F5FFFA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    ...Platform.select({
      ios: { width: "92%" },
      web: { width: "70%", maxWidth: 900 },
    }),

    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 30,

    shadowColor: "#4682B4",
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
headerRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 20,
},

title: {
  fontSize: 26,
  fontWeight: "700",
  color: "#2F4F4F",
  flexShrink: 1,
  marginRight: 12,
},
description: {
  fontSize: 16,
  lineHeight: 22,
  color: "#475569",
  marginBottom: 24,
},
rewardContainer: {
  backgroundColor: "#E8F5E9",
  paddingVertical: 14,
  paddingHorizontal: 18,
  borderRadius: 16,
  marginBottom: 30,
},

rewardText: {
  fontSize: 16,
  fontWeight: "600",
  color: "#2E8B57",
},
  buttonContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 20,
},

button: {
  flex: 1,
  paddingVertical: 14,
  borderRadius: 16,
  alignItems: "center",
},
backButton: {
  backgroundColor: "#e2e8f0",
},

submitButton: {
  backgroundColor: "#2E8B57",
},

disabledButton: {
  backgroundColor: "#9ca3af",
},
buttonText: {
  fontSize: 16,
  fontWeight: "600",
  color: "#ffffff",
},
backButtonText: {
  color: "#334155",
},
});
