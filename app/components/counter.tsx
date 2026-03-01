import { StyleSheet, Text, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

export function SproutCounter({ count }: { count: number }) {
  return (
    <View style={styles.container}>
      <IconSymbol
        name="leaf.fill"
        color="#76c796"
        style={{ width: 25, height: 25 }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold" }}> {count} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ecebeb",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    paddingLeft: 5,
    borderRadius: 20,
    margin: 5,
    minWidth: 100,
  },
});
