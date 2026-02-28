import { Text, View, StyleSheet, Platform } from "react-native";
import ProgressBar from "./components/progress-bar";

export default function HomePage() {
    return (
        
        <View style={{ flex: 1}}>
            <View style={styles.container}>
                <Text>Hello User!</Text>
                <Text>What would you like to do today?</Text>
            </View>
            
            <View style={{ alignSelf: "center", alignItems: "center", width: "70%" }}>
                <Text style={{ margin: 10 }}>Progress to Next Task</Text>
                <ProgressBar/>
            </View>
        </View>
    )
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
    }})