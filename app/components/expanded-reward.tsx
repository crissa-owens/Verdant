import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Reward } from "../interfaces/reward";

interface ExpandedRewardProps {
  reward: Reward;
  onBack: () => void;
}

export default function ExpandedReward(props: ExpandedRewardProps) {
    return (
        <View style={styles.expanded_reward}>
            <Text style={{ fontSize: 45, fontWeight: "bold" }}>{props.reward.title}</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                <View style={{ width: "50%", height: "100%", paddingRight: 20, justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 18 }}>{props.reward.description}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={{ fontSize: 18, marginTop: 20 }}>{props.reward.cost} Sprouts</Text>
                        <Text style={{ fontSize: 18, marginTop: 20 }}>{props.reward.value}</Text>
                    </View>
                    <Pressable onPress={props.onBack} style={{ 
                            marginTop: 20, 
                            padding: 10, 
                            backgroundColor: "#e6e6e6", 
                            borderRadius: 10, 
                            alignSelf: "flex-start"
                        }}>
                        <Text style={{ fontSize: 18 }}>Back</Text>
                    </Pressable>
                </View>
                <Image
                    source={{ uri: props.reward.image }}
                    style={{ width: "50%", height: "100%", borderRadius: 10, overflow: "hidden" }}
                    resizeMode="cover"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    expanded_reward: {
        padding: 20,
        width: "100%",
        height: "100%",
    }})