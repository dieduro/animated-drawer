/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { styled, useTheme } from 'styled-components/native';
import { Text, View } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';

const TabBarItemLabel = styled(Text)<{ focused: boolean }>`
  color: ${({ focused, theme }) => (focused ? theme.colors.primary : theme.colors.secondary)};
`;

export default function TabsLayout() {
  const { colors } = useTheme();
  const [showTabBar, setShowTabBar] = useState(true);
  const drawerStatus = useDrawerStatus();

  useEffect(() => {
    setShowTabBar(drawerStatus !== 'open');
  }, [drawerStatus]);


  return (
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: showTabBar ? 'flex' : 'none' },
          }}
        >
            <Tabs.Screen
                name="index"
                options={{
                  tabBarLabel: ({ focused }) => (
                      <TabBarItemLabel focused={focused}>Home</TabBarItemLabel>
                  ),
                  tabBarIcon: ({ focused }) => (
                    <Feather name="home" size={24} color={focused ? colors.primary : colors.secondary} />
                  ),
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                  tabBarLabel: ({ focused }) => (
                    <TabBarItemLabel focused={focused}>Contact</TabBarItemLabel>
                  ),
                  tabBarIcon: ({ focused }) => ( <Feather name="feather" size={24} color={focused ? colors.primary : colors.secondary} />),
                }}
            />
        </Tabs>
      </View>
  );
}
