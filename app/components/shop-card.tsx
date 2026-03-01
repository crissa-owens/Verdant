import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Reward } from "../interfaces/reward";
import { IconSymbol } from "./ui/icon-symbol";
import { styles } from "../styles";

interface ShopCardProps {
  reward: Reward;
  onPress: (reward: Reward) => void;
}

export default function ShopCard(props: ShopCardProps) {
  const { reward, onPress } = props;
  return (
    <Pressable style={ [styles.card, {margin: 8, width: "32%" }] }onPress={() => onPress(reward)}>
      <View style={{ width: "100%", height: Platform.OS === "web" ? 125 : 150 }}>
        <Image
          source={{ uri: reward.image }}
          style={{ width: "100%", height: Platform.OS === "web" ? "100%" : 150, borderRadius: 10, overflow: "hidden" }}
          resizeMode="cover"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.title, { fontSize: 16, padding: 10 }]}>{reward.title}</Text>
        <Text style={{ padding: 10 }}>{reward.cost} Sprouts <IconSymbol name="leaf.fill" size={16} color="#76c796"/></Text>
      </View>
    </Pressable>
  );
}

const local_styles = StyleSheet.create({
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
