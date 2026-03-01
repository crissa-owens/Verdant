import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontSize: 18,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        ...Platform.select({
            ios: {
                padding: 20,
                margin: 20,
            },
            web: {
                padding: 20,
                margin: 30,
                width: "30%",
            },
        })
    },
    input_styles: {
        width: 150,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "white",
        padding: 10,
    },
    button_styles: {
        backgroundColor: "blue", 
        padding: 10, 
        borderRadius: 5, 
        marginTop: 20,
        width: 150,
        alignItems: "center",
    },
    shop_styles: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#F5FFFA"
        
    },
    card_container: {
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 10,
        width: "100%",
    },
    profile_styles: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
    },
    title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2F4F4F",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "#6b7280", // softer gray
    lineHeight: 20,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
    marginBottom: 12,
  },
  sprouts: {
    fontSize: 13,
    fontWeight: "600",
    color: "#F5FFFA",
    backgroundColor: "#2E8B57", // seagreen
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  scrollContent: {
    paddingVertical: 20,
    backgroundColor: "#F5FFFA",
  },
  accentBar: {
    height: 4,
    width: 40,
    backgroundColor: "#8FBC8F", // darkseagreen
    borderRadius: 2,
    marginBottom: 12,
  },

  grid: {
    alignItems: "center",
    ...Platform.select({
      web: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
      },
    }),
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#4682B4",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3, 
    ...Platform.select({
      ios: {
        width: "90%",
        minWidth: "90%",
        marginBottom: 16,
      },
      web: {
        width: 400,
        height: 200,
        cursor: "pointer",
        transitionDuration: "0.2s",
      },
    }),
  },
})