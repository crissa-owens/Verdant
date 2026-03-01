import { View, Text, StyleSheet } from "react-native";
import { Task } from "../interfaces/task";

interface TaskWidgetProps {
    task: Task | null;
}

export default function TaskWidget({ task }: TaskWidgetProps) {
    if (task) {    
    return (
            <View style={styles.favorite_task}>
                <Text style={{ fontWeight: "bold", marginBottom: 10 }}>{task.Title}</Text>
                <Text style={{ marginBottom: 10 }}>{task.Description}</Text>
                <Text style={{ fontStyle: "italic" }}>
                    {task.SproutValue} Sprouts per {task.Threshold} {task.Unit}
                </Text>
            </View> 
        )
    } else {
        return (
            <View style={styles.favorite_task}>
                <Text>No Task Selected</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    favorite_task: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        padding: 20,
        width: "50%",
        height: 100,
    }
})