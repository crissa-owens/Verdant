import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Reward } from "../interfaces/reward";

interface ShopCardProps {
  reward: Reward;
}

export default function ShopCard(props: ShopCardProps) {
  const { reward } = props;
  return (
    <View style={styles.shop_card}>
      <View style={{ width: "100%", height: "60%" }}>
        <Image
          source={{ uri: reward.image }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ padding: 10 }}>{reward.title}</Text>
        <Text style={{ padding: 10 }}>{reward.cost} Sprouts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shop_card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    ...Platform.select({
      ios: {
        margin: 5,
      },
      web: {
        margin: 5,
        width: "30%",
        height: "30%",
      },
    }),
  },
});
