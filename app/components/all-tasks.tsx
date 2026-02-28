import { useState } from "react";
import { Pressable, Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import { TimeTask } from "./time-task";
import { TimeTasks } from "../data/time-tasks.json";
import { QuantityTasks } from "../data/quantity-tasks.json";
import { EventTasks } from "../data/event-tasks.json";
import { Task } from "../interfaces/task";
import { EventTask } from "./event-task";
import { QuantityTask } from "./quantity-task";

export function AllTasks() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const Tasks = [...TimeTasks, ...QuantityTasks, ...EventTasks];
  function handleTaskPress(task: Task) {
    setSelectedTask(task);
  }
  if (selectedTask) {
    if (selectedTask.ID >= 101 && selectedTask.ID <= 103) {
      return <QuantityTask task={selectedTask} onBack={() => setSelectedTask(null)} />;
    } else if (selectedTask.ID >= 201 && selectedTask.ID <= 203) {
      return <TimeTask task={selectedTask} onBack={() => setSelectedTask(null)} />;
    } else {
        return <EventTask task={selectedTask} onBack={() => setSelectedTask(null)} />;
    }
  }

  return (
    <ScrollView>
      {Tasks.map((task) => (
        <Pressable
          key={task.ID}
          onPress={() => {
              handleTaskPress(task)}}
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