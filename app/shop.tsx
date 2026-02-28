import { Text, View } from "react-native";
import { styles } from "./styles";
import Divider from "./components/divider";
import ShopCard from "./shop-card";
import { Reward } from "./interfaces/reward";

import rewardData from "./data/rewards.json";
const REWARDS: Reward[] = rewardData.rewards;

export default function ShopPage() {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.shop_styles}>
                <Text style={styles.title}>Shop</Text>
                <Divider/>
                {REWARDS.map((reward, index) => (
                    <ShopCard key={index} reward={reward}/>
                ))}
            </View>
        </View>
    )
}