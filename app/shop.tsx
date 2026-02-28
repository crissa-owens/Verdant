import { Text, View } from "react-native";
import { styles } from "./styles";
export default function ShopPage() {
    return (
        <View style={{ flex: 1}}>
            <View style={styles.container}>
                <Text>Welcome to the Shop!</Text>
                <Text>Here you can buy items to help you on your tasks.</Text>
            </View>
        </View>
    )
}