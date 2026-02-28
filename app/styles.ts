import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        ...Platform.select({
            ios: {
                padding: 20,
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