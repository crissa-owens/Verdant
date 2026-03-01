import { SproutContext } from '../context/sprout';
import { Tabs } from 'expo-router';
import { IconSymbol } from '../components/ui/icon-symbol.ios';
import { HapticTab } from '../components/haptic-tab';
import React from 'react';
import { SproutCounter } from '../components/counter';

export default function TabLayout() {
  const [sprouts, setSprouts] = React.useState(0);

  return (
    <SproutContext.Provider value={{ sprouts, setSprouts }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "green",
          headerShown: true,
          headerLeft: () => <SproutCounter count={sprouts} />,
          tabBarButton: HapticTab,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            title: 'Tasks',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="list.bullet" color={color} />
            ),
          }}
        />
      </Tabs>
    </SproutContext.Provider>
  );
}