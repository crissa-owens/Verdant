import { Tabs } from 'expo-router';
import React from 'react';
import { IconSymbol } from '../components/ui/icon-symbol';
import { HapticTab } from '../components/haptic-tab';
import { SproutCounter } from '../components/counter';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
              tabBarActiveTintColor: "green",
              headerShown: true,
              headerLeft: () => <SproutCounter count={100000} />,
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
    </Tabs>
  );
}
