import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Reward } from "../interfaces/reward";

interface ShopCardProps {
  reward: Reward;
  onPress: (reward: Reward) => void;
}

export default function ShopCard(props: ShopCardProps) {
  const { reward, onPress } = props;
  return (
    <Pressable style={styles.shop_card}onPress={() => onPress(reward)}>
      <View style={{ width: "100%", height: "80%" }}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shop_card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    ...Platform.select({
      ios: {
        width: "90%",
        height: 200,
        margin: 8
      },
      web: {
        width: "32%",
        height: 240,
        margin: 8
      },
    }),
  },
});
