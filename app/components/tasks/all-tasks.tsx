import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { EventTasks } from "../../data/event-tasks.json";
import { QuantityTasks } from "../../data/quantity-tasks.json";
import { TimeTasks } from "../../data/time-tasks.json";
import { Task } from "../../interfaces/task";
import { EventTask } from "./event-task";
import { QuantityTask } from "./quantity-task";
import { TimeTask } from "./time-task";

interface AllTasksProps {
  sprouts: number;
  setSprouts: (newSprouts: number) => void;
  setFavorite: (task: Task) => void;
}

export function AllTasks({ sprouts, setSprouts, setFavorite }: AllTasksProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const Tasks = [...TimeTasks, ...QuantityTasks, ...EventTasks];
  function handleTaskPress(task: Task) {
    setSelectedTask(task);
  }
  function handleSubmit(newSprouts: number) {
    setSelectedTask(null);
    setSprouts(sprouts + newSprouts);
  }

  if (selectedTask) {
    if (selectedTask.ID >= 101 && selectedTask.ID <= 199) {
      return (
        <QuantityTask
          task={selectedTask}
          onBack={() => setSelectedTask(null)}
          onSubmit={handleSubmit}
          setFavorite={setFavorite}
        />
      );
    } else if (selectedTask.ID >= 201 && selectedTask.ID <= 299) {
      return (
        <TimeTask
          task={selectedTask}
          onBack={() => setSelectedTask(null)}
          onSubmit={handleSubmit}
          setFavorite={setFavorite}
        />
      );
    } else {
      return (
        <EventTask
          task={selectedTask}
          onBack={() => setSelectedTask(null)}
          onSubmit={handleSubmit}
          setFavorite={setFavorite}
        />
      );
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.grid}>
        {Tasks.map((task) => (
          <Pressable key={task.ID} onPress={() => handleTaskPress(task)}>
            <View style={styles.card}>
              <Text style={styles.title}>{task.Title}</Text>
              <View style={styles.accentBar} />
              <Text style={styles.description}>{task.Description}</Text>

              <View style={styles.bottomSection}>
                <View style={styles.divider} />
                <Text style={styles.sprouts}>
                  {task.SproutValue} Sprouts per {task.Threshold} {task.Unit}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        margin: 10,
        width: "90%",
        height: 100,
      },
      web: {
        padding: 10,
        margin: 30,
        width: "30%",
      },
    }),
  },
    bottomSection: {
    marginTop: "auto",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2F4F4F",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "#6b7280", // softer gray
    lineHeight: 20,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
    marginBottom: 12,
  },
  sprouts: {
    fontSize: 13,
    fontWeight: "600",
    color: "#F5FFFA",
    backgroundColor: "#2E8B57", // seagreen
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  scrollContent: {
    paddingVertical: 20,
    backgroundColor: "#F5FFFA",
  },
  accentBar: {
    height: 4,
    width: 40,
    backgroundColor: "#8FBC8F", // darkseagreen
    borderRadius: 2,
    marginBottom: 12,
  },

  grid: {
    alignItems: "center",
    ...Platform.select({
      web: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
      },
    }),
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#4682B4",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3, 
    ...Platform.select({
      ios: {
        width: "90%",
        minWidth: "90%",
        marginBottom: 16,
      },
      web: {
        width: 400,
        height: 200,
        cursor: "pointer",
        transitionDuration: "0.2s",
      },
    }),
  },
});
