import { router, Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '../components/ui/icon-symbol';
import { HapticTab } from '../components/haptic-tab';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
              headerTitle: "Verdant",
              headerTitleAlign: "center",
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
        name="home"
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
  );
}
