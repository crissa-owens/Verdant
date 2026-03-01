import { router, Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SproutCounter } from "../components/counter";
import { HapticTab } from "../components/haptic-tab";
import { IconSymbol } from "../components/ui/icon-symbol";
import { NameContext } from "../context/name";
import { RewardContext } from "../context/rewards";
import { SproutContext } from "../context/sprout";
import { TaskContext } from "../context/task";
import { Reward } from "../interfaces/reward";
import { Task } from "../interfaces/task";

export default function TabLayout() {
  const [sprouts, setSprouts] = React.useState(0);
  const [name, setName] = React.useState("");
  const [task, setTask] = React.useState<Task | null>(null);
  const [reward, setReward] = React.useState<Reward | null>(null);

  return (
    <SproutContext.Provider value={{ sprouts, setSprouts }}>
      <NameContext.Provider value={{ name, setName }}>
        <TaskContext.Provider value={{ task, setTask }}>
          <RewardContext.Provider value={{ reward, setReward }}>
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
              <Tabs.Screen name="profile" options={{ href: null }} />
            </Tabs>
          </RewardContext.Provider>
        </TaskContext.Provider>
      </NameContext.Provider>
    </SproutContext.Provider>
  );
}
