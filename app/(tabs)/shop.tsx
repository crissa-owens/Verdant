import { ScrollView, Text, View } from "react-native";
import Divider from "../components/divider";
import ShopCard from "../components/shop-card";
import { Reward } from "../interfaces/reward";
import { styles } from "../styles";
import React from "react";


import rewardData from "../data/rewards.json";
import ExpandedReward from "../components/expanded-reward";
const REWARDS: Reward[] = rewardData.rewards;

export default function ShopPage() {
    const [selectedReward, setSelectedReward] = React.useState<Reward | null>(null);
    function handleRewardPress(reward: Reward) {
        setSelectedReward(reward);
    }

    if (selectedReward) {
        return (
            <ExpandedReward reward={selectedReward} onBack={() => setSelectedReward(null)}/>
        )
    }

    return (
    <View style={{ flex: 1 }}>
      <View style={styles.shop_styles}>
        <Text style={styles.title}>Shop</Text>
        <Divider />
        <ScrollView contentContainerStyle={styles.card_container}>
          {REWARDS.map((reward, index) => (
            <ShopCard key={index} reward={reward} onPress={handleRewardPress} />
          ))}
          {selectedReward && (
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>{selectedReward.title}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
