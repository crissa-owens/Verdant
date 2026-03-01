import React from "react";
import { ScrollView, Platform, View } from "react-native";
import ShopCard from "../components/shop-card";
import { Reward } from "../interfaces/reward";
import rewardData from "../data/rewards.json";
import ExpandedReward from "../components/expanded-reward";

const REWARDS: Reward[] = rewardData.rewards;

export default function ShopPage() {
  const [selectedReward, setSelectedReward] = React.useState<Reward | null>(
    null,
  );

  if (selectedReward) {
    return (
      <ExpandedReward
        reward={selectedReward}
        onBack={() => setSelectedReward(null)}
      />
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: "#F5FFFA" }}
      contentContainerStyle={{
        paddingVertical: 20,
        alignItems: "center", // centers the entire grid horizontally
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          maxWidth: 1200, // keeps the grid from stretching too wide
          width: "100%",
        }}
      >
        {REWARDS.map((reward, index) => (
          <ShopCard
            key={index}
            reward={reward}
            onPress={() => setSelectedReward(reward)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
