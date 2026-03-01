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
}

export function AllTasks({ sprouts, setSprouts }: AllTasksProps) {
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
      return <QuantityTask task={selectedTask} onBack={() => setSelectedTask(null)} onSubmit={handleSubmit} />;
    } else if (selectedTask.ID >= 201 && selectedTask.ID <= 299) {
      return <TimeTask task={selectedTask} onBack={() => setSelectedTask(null)} onSubmit={handleSubmit}/>;
    } else {
        return <EventTask task={selectedTask} onBack={() => setSelectedTask(null)} onSubmit={handleSubmit}/>;
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
                    {task.SproutValue} Sprouts per {task.Threshold} {task.Unit}
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