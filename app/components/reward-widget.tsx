import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";
import { useContext } from "react";
import { RewardContext } from "../context/rewards";
import ProgressBar from "./progress-bar";

export default function RewardWidget() {
    const rewardCtxt = useContext(RewardContext);
    if (!rewardCtxt) throw new Error("Reward Context missing");
    
    const { reward } = rewardCtxt;

    if (reward) {    
    return (
            <View style={styles.favorite_task}>
                <Text style={{ fontWeight: "bold", marginBottom: 10 }}>{reward.title}</Text>
                <TouchableOpacity style={{ position: "absolute", top: 5, right: 10 }}
                onPress={() => {rewardCtxt.setReward(null)}}>
                    <IconSymbol name="star" size={36} color="#f2c910" />
                </TouchableOpacity>
                <Text style={{ marginBottom: 10 }}>{reward.description}</Text>
                <ProgressBar/>
            </View> 
        )
    } else {
        return (
            <View style={styles.favorite_task}>
                <Text>No Reward Selected</Text>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    favorite_task: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        padding: 20,
        width: "50%",
        height: 150,
        ...Platform.select({
            ios: {
                width: "90%",
                height: 150,
            },
            web: {
                width: "50%",
                height: 100,
            },
        })
    }
})