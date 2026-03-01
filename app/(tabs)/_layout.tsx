import { router, Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { HapticTab } from "../components/haptic-tab";
import { SproutCounter } from "../components/counter";
import { IconSymbol } from "../components/ui/icon-symbol";
import { NameContext } from "../context/name";
import { SproutContext } from "../context/sprout";

export default function TabLayout() {
  const [sprouts, setSprouts] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <SproutContext.Provider value={{ sprouts, setSprouts }}>
      <NameContext.Provider value={{ name, setName }}>
        <Tabs
          screenOptions={{
            headerTitle: "Verdant",
            headerTitleAlign: "center",
            headerLeft: () => <SproutCounter count={sprouts} />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push("/profile")}
                style={{ marginRight: 15 }}
              >
                <IconSymbol name="person.circle" size={28} color="black" />
              </TouchableOpacity>
            ),
            tabBarActiveTintColor: "green",
            headerShown: true,
            tabBarButton: HapticTab,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name="house" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="tasks"
            options={{
              title: "Tasks",
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name="list.bullet" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="shop"
            options={{
              title: "Shop",
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name="cart" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="community"
            options={{
              title: "Community",
              tabBarIcon: ({ color }) => (
                <IconSymbol
                  size={28}
                  name="bubble.left.and.text.bubble.right"
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen name="profile" options={{ href: null }} />
        </Tabs>
      </NameContext.Provider>
    </SproutContext.Provider>
  );
}
