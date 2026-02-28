import { Text, View, StyleSheet } from "react-native";

export default function HomePage() {
    return (
        
        <View>
            <View style={styles.container}>
                <Text>Hello User!</Text>
                <Text>What would you like to do today?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 20,
        marginTop: 50,
        backgroundColor: "#f0f0f0",
        width: "30%",
    }})