import { View } from "react-native";

export default function ProgressBar() {
    return (
        <View style={{ height: 30, width: "100%", backgroundColor: "#e0e0e0", borderRadius: 25 }}>
            <View style={{ height: "100%", width: "50%", backgroundColor: "#76c7c0", borderRadius: 25 }} />
        </View>
    )
}