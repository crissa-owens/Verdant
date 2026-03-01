import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FavoriteContext } from "../context/favorite";
import { IconSymbol } from "./ui/icon-symbol";

export default function FavoriteWidget() {
  const favoriteCtxt = useContext(FavoriteContext);
  if (!favoriteCtxt) throw new Error("FavoriteContext missing");

  const { favorite } = favoriteCtxt;

  if (favorite) {
    return (
      <View style={styles.favorite_task}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {favorite.Title}
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 5, right: 10 }}
          onPress={() => {
            favoriteCtxt.setFavorite(null);
          }}
        >
          <IconSymbol name="star.fill" size={36} color="#f2c910" />
        </TouchableOpacity>
        <Text style={{ marginBottom: 10 }}>{favorite.Description}</Text>
        <Text style={{ fontStyle: "italic" }}>
          {favorite.SproutValue} Sprouts per {favorite.Threshold}{" "}
          {favorite.Unit}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.favorite_task}>
        <Text>No Favorite Task Selected</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favorite_task: {
  position: "relative",
  backgroundColor: "#ffffff",
  borderRadius: 20,
  padding: 24,
  width: "90%",
  maxWidth: 600,
  minHeight: 160,

  shadowColor: "#4682B4",
  shadowOpacity: 0.12,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 6 },
  elevation: 4,
},
});
