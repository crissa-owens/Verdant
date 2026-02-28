import { Text, View, Pressable } from "react-native";
import { TimeIncrement } from "./time-increment";
import { useState } from "react";
import { Task } from "../interfaces/task";

interface TimeTaskProps {
  task: Task;
  onBack: () => void;
}

export function TimeTask({ task, onBack }: TimeTaskProps) {
  return (
    <View>
      <Text>{task.Title}</Text>
      <Text>{task.Description}</Text>
      <Text>
        {task.SproutValue} Sprouts per {task.PerLinear}
      </Text>

      <TimeIncrement />

      <Pressable onPress={onBack}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}