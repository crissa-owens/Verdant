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
                width: "70%",
                height: 100,
            },
            web: {
                padding: 20,
                margin: 30,
                width: "30%",
            },
        })
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
        justifyContent: "center" ,
        width: "100%",
        height: "100%",
    }
})