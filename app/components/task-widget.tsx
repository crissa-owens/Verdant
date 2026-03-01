import { View, Text } from "react-native";
import { Task } from "../interfaces/task";

interface TaskWidgetProps {
    task: Task | null;
}

export default function TaskWidget({ task }: TaskWidgetProps) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>{task ? task.Title : "No Task Selected"}</Text>
            </View> 
        )
}