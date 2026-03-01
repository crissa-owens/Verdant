import React, { useContext } from "react";
import { View } from "react-native";
import { RewardContext } from "../context/milestone";
import { SproutContext } from "../context/sprout";

export default function ProgressBar() {
  const sproutCtxt = useContext(SproutContext);
  const rewardCtxt = useContext(RewardContext);
  if (!sproutCtxt) throw new Error("Sprout Context missing");
  if (!rewardCtxt) throw new Error("Reward Context missing");

  const progress = rewardCtxt.reward
    ? Math.min((sproutCtxt.sprouts / Number(rewardCtxt.reward.cost)) * 100, 100)
    : 0;
  if (!rewardCtxt.reward) return null;
  return (
    <View
      style={{
        height: 30,
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: 25,
      }}
    >
      <View
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: "#76c7c0",
          borderRadius: 25,
        }}
      />
    </View>
  );
}
