import { Image, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Reward } from "../interfaces/reward";
import { MilestoneContext } from "../context/milestone";
import { useContext } from "react";
import { IconSymbol } from "./ui/icon-symbol";
import { styles } from "../styles";

interface ExpandedRewardProps {
  reward: Reward;
  onBack: () => void;
}

export default function ExpandedReward(props: ExpandedRewardProps) {
    const milestoneCtxt = useContext(MilestoneContext);
    if (!milestoneCtxt) throw new Error("Milestone Context missing");
    
    return (
    <View style={local_styles.expanded_reward}>
        {Platform.OS === "web" ? 
            <View style={[styles.card, { padding: 20, width: "85%", height: 575,alignSelf: "center" }]}>
                <Text style={[styles.title, { fontSize: 45, marginBottom: 10 }]}>{props.reward.title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                    <View style={{ width: "50%", height: "100%", paddingRight: 20, justifyContent: "space-between" }}>
                    <Text style={[styles.description, { fontSize: 24, lineHeight: 30 }]}>{props.reward.description}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={[styles.description,{ fontSize: 18, marginTop: 20 }]}>{props.reward.cost} Sprouts <IconSymbol name="leaf.fill" size={16} color="#76c796"/></Text>
                        
                        <Text style={[styles.description,{ fontSize: 18, marginTop: 20 }]}>{props.reward.value}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <Pressable onPress={props.onBack} style={{ 
                            marginTop: 20, 
                            padding: 10, 
                            backgroundColor: "#e6e6e6", 
                            borderRadius: 10, 
                            alignSelf: "flex-start"
                        }}>
                        <Text style={{ fontSize: 18 }}>Back</Text>
                    </Pressable>
                    <Pressable onPress={() => milestoneCtxt.setMilestone(props.reward)} style={{ 
                            marginTop: 20, 
                            padding: 10, 
                            backgroundColor: "#e6e6e6", 
                            borderRadius: 10, 
                            alignSelf: "flex-start"
                        }}>
                        <Text style={{ fontSize: 18 }}>Add Milestone</Text>
                    </Pressable>
                    </View>
                    </View>
                <Image
                    source={{ uri: props.reward.image }}
                    style={{ width: "50%", height: 450, borderRadius: 10, overflow: "hidden" }}
                    resizeMode="cover"
                />
                </View> 
            </View>
            :
            <ScrollView contentContainerStyle={[styles.card, { rowGap: 5, alignSelf: "center" }]}>
                <Text style={[styles.title, { fontSize: 36, fontWeight: "700", alignSelf: "center" }]}>{props.reward.title}</Text>
                <Image
                    source={{ uri: props.reward.image }}
                    style={{ width: "90%", height: 300, borderRadius: 10, overflow: "hidden", alignSelf: "center" }}
                    resizeMode="cover"
                />
                <Text style={[styles.description, { fontSize: 18}]}>{props.reward.description}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={{ fontSize: 18, marginTop: 20 }}>{props.reward.cost} Sprouts <IconSymbol name="leaf.fill" size={16} color="#76c796"/></Text>
                        <Text style={{ fontSize: 18, marginTop: 20 }}>{props.reward.value}</Text>
                    </View> 
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <Pressable onPress={props.onBack} style={{ 
                            marginTop: 20, 
                            padding: 10, 
                            backgroundColor: "#e6e6e6", 
                            borderRadius: 10, 
                            alignSelf: "flex-start"
                        }}>
                        <Text style={{ fontSize: 18 }}>Back</Text>
                    </Pressable>
                    <Pressable onPress={() => milestoneCtxt.setMilestone(props.reward)} style={{ 
                            marginTop: 20, 
                            padding: 10, 
                            backgroundColor: "#e6e6e6", 
                            borderRadius: 10, 
                            alignSelf: "flex-start"
                        }}>
                        <Text style={{ fontSize: 18 }}>Add Milestone</Text>
                    </Pressable>
                    </View>
            </ScrollView> 
        }
        
    </View>
    );
}

const local_styles = StyleSheet.create({
    expanded_reward: {
        flex: 1,
        padding: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "#F5FFFA",
    }})
