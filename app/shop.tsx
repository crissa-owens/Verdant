import { Text, View } from "react-native";
import { styles } from "./styles";
import Divider from "./components/divider";
import ShopCard from "./shop-card";



export default function ShopPage() {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.shop_styles}>
                <Text style={styles.title}>Shop</Text>
                <Divider/>
                <ShopCard></ShopCard>
            </View>
        </View>
    )
}