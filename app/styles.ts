import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 20,
    },
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
            },
            web: {
                padding: 20,
                margin: 30,
                width: "30%",
            },
        })
    },
    input_styles: {
        width: 150,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "white",
        padding: 10,
    },
    button_styles: {
        backgroundColor: "blue", 
        padding: 10, 
        borderRadius: 5, 
        marginTop: 20,
        width: 150,
        alignItems: "center",
    },
    shop_styles: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        
    },
    card_container: {
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 10,
        width: "100%",
    },
    profile_styles: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
    }
})