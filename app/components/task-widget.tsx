import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";
import { useContext } from "react";
import { TaskContext } from "../context/task";

export default function TaskWidget() {
    const taskCtxt = useContext(TaskContext);
    if (!taskCtxt) throw new Error("TaskContext missing");
    
    const { task } = taskCtxt;

    if (task) {    
    return (
            <View style={styles.favorite_task}>
                <Text style={{ fontWeight: "bold", marginBottom: 10 }}>{task.Title}</Text>
                <TouchableOpacity style={{ position: "absolute", top: 5, right: 10 }}
                onPress={() => {taskCtxt.setTask(null)}}>
                    <IconSymbol name="star" size={36} color="#f2c910" />
                </TouchableOpacity>
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
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        padding: 20,
        ...Platform.select({
            ios: {
                width: "90%",
                height: 150,
            },
            web: {
                width: "50%",
                height: 100,
            },
        })
    }
})