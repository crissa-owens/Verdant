import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Reward } from "../interfaces/reward";
import { IconSymbol } from "./ui/icon-symbol";

interface ShopCardProps {
  reward: Reward;
  onPress: (reward: Reward) => void;
}

export default function ShopCard({ reward, onPress }: ShopCardProps) {
  return (
    <Pressable style={styles.shopCard} onPress={() => onPress(reward)}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: reward.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {reward.title}
        </Text>
        <View style={styles.costContainer}>
          <Text style={styles.costText}>{reward.cost} Sprouts</Text>
          <IconSymbol name="leaf.fill" size={16} color="#76c796" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shopCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    ...Platform.select({
      ios: { width: "90%", marginBottom: 16 },
      web: { width: "calc(33% - 16px)", marginBottom: 16 } as any,
    }),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: Platform.OS === "web" ? 200 : 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#2F4F4F",
    marginRight: 8,
  },
  costContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0, // keep sprouts/leaf from shrinking
    gap: 4,
  },
  costText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2E8B57",
  },
});
