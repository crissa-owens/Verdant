import { router, Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '../components/ui/icon-symbol';
import { HapticTab } from '../components/haptic-tab';
import { TouchableOpacity } from 'react-native';
import { SproutContext } from '../context/sprout';
import { SproutCounter } from '../components/counter';


export default function TabLayout() {
  const [sprouts, setSprouts] = React.useState(0);

  return (
  <SproutContext.Provider value={{ sprouts, setSprouts }}>
    <Tabs
      screenOptions={{
              headerTitle: "Verdant",
              headerTitleAlign: "center",
              headerLeft: () => <SproutCounter count={sprouts} />,
              headerRight: () => 
              <TouchableOpacity
                onPress={() => router.push("/profile")}
                style={{ marginRight: 15 }}>
                <IconSymbol name="person.circle" size={28} color="black" />
              </TouchableOpacity>,
              tabBarActiveTintColor: "green",
              headerShown: true,
              tabBarButton: HapticTab,
            }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="list.bullet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ href: null}}/>
    </Tabs>
  </SproutContext.Provider>

  );
}