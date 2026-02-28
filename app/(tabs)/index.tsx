import { Text, View } from "react-native";
import { styles } from "../styles";
import ProgressBar from "../components/progress-bar";

export default function HomePage() {
    return (
        
        <View style={{ flex: 1}}>
            <View style={styles.container}>
                <Text>Hello User!</Text>
                <Text>What would you like to do today?</Text>
            </View>
            
            <View style={{ alignSelf: "center", alignItems: "center", width: "70%" }}>
                <Text style={{ margin: 10 }}>Progress to Next Task</Text>
                <ProgressBar/>
            </View>
        </View>
    )
}

