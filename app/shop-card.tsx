import { StyleSheet, Platform, Text, View, Image } from "react-native";
import { Reward } from "./interfaces/reward";

interface ShopCardProps {
    reward: Reward;
}

export default function ShopCard(props: ShopCardProps) {
    const { reward } = props;
    return (
        <View style={styles.shop_card}>
            <Image 
                source={{ uri: reward.image }}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"/>
            <Text>{reward.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    shop_card: {
        justifyContent: "center",
        alignItems: "center",
}})