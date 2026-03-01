import { Text, View } from "react-native";
import { styles } from "../styles";
import ProgressBar from "../components/progress-bar";
import { useContext } from "react";
import { NameContext } from "../context/name";

export default function HomePage() {
    const context = useContext(NameContext);
    if (!context) throw new Error("NameContext missing");
    
    return (
        
        <View style={{ flex: 1}}>
            <View style={styles.container}>
                <Text>Hello {context.name ? context.name : "Guest"}!</Text>
                <Text>What would you like to do today?</Text>
            </View>
            
            <View style={{ alignSelf: "center", alignItems: "center", width: "70%" }}>
                <Text style={{ margin: 10 }}>Progress to Next Task</Text>
                <ProgressBar/>
            </View>
        </View>
    )
}

