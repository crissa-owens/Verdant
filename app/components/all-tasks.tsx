import { useState } from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { TimeTask } from "./time-task";
import { TimeTasks } from "../data/time-tasks.json";
import { QuantityTasks } from "../data/quantity-tasks.json";
import { EventTasks } from "../data/event-tasks.json";
import { Task } from "../interfaces/task";

export function AllTasks() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const Tasks = [...TimeTasks, ...QuantityTasks, ...EventTasks];

  function handleTimeTaskPress(task: Task) {
    setSelectedTask(task);
  }

  if (selectedTask) {
    return <TimeTask task={selectedTask} onBack={() => setSelectedTask(null)} />;
  }

  return (
    <View>
      {Tasks.map((task) => (
        <Pressable
          key={task.ID}
          onPress={() => {
            if (task.ID >= 201 && task.ID <= 203) {
              handleTimeTaskPress(task);
            }
          }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{task.Title}</Text>
                <Text style={styles.description}>{task.Description}</Text>
                <Text style={styles.sprouts}>
                    {task.SproutValue} Sprouts per {task.PerLinear}
                </Text>
            </View>
        </Pressable>
      ))}
    </View>
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
                margin: 20,
                width: "70%",
                height: 100,
            },
            web: {
                padding: 20,
                margin: 30,
                width: "30%",
            },
        })
    }
    ,
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    sprouts: {
        fontSize: 12,
        color: "#888",
    },
});