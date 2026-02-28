import { ScrollView, Text, View } from "react-native";
import Divider from "../components/divider";
import ShopCard from "../components/shop-card";
import { Reward } from "../interfaces/reward";
import { styles } from "../styles";

import rewardData from "../data/rewards.json";
const REWARDS: Reward[] = rewardData.rewards;

export default function ShopPage() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.shop_styles}>
        <Text style={styles.title}>Shop</Text>
        <Divider />
        <ScrollView contentContainerStyle={styles.card_container}>
          {REWARDS.map((reward, index) => (
            <ShopCard key={index} reward={reward} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
