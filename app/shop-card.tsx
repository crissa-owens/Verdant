import { StyleSheet, Platform, Text, View } from "react-native";


export default function ShopCard() {
    return (
        <View style={styles.shop_card}>
            <Text>Shop Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    shop_card: {
        justifyContent: "center",
        alignItems: "center",
}})