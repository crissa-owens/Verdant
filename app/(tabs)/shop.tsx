import React from "react";
import { FlatList, Platform, Text, View } from "react-native";
import Divider from "../components/ui/divider";
import ShopCard from "../components/shop-card";
import { Reward } from "../interfaces/reward";
import { styles } from "../styles";
import ExpandedReward from "../components/expanded-reward";
import rewardData from "../data/rewards.json";

const REWARDS: Reward[] = rewardData.rewards;

export default function ShopPage() {
  const [selectedReward, setSelectedReward] = React.useState<Reward | null>(
    null,
  );
  function handleRewardPress(reward: Reward) {
    setSelectedReward(reward);
  }

  if (selectedReward) {
    return (
      <ExpandedReward
        reward={selectedReward}
        onBack={() => setSelectedReward(null)}
      />
    );
  }

  return (
    <View>
      <View style={styles.shop_styles}>
        <Text style={styles.title}>Shop</Text>
        <Divider />
          <FlatList
          data={REWARDS}
          style={{ width: "100%" }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={Platform.OS === "web" ? 3 : 1}
          columnWrapperStyle={
            Platform.OS === "web"
              ? { justifyContent: "space-between" }
              : undefined
          }
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <ShopCard reward={item} onPress={handleRewardPress} />
          )}
        />
      </View>
    </View>
  );
}
