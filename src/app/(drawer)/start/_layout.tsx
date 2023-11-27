/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { styled, useTheme } from 'styled-components/native';
import { Text } from 'react-native';

const TabBarItemLabel = styled(Text)<{ focused: boolean }>`
  color: ${({ focused, theme }) => (focused ? theme.colors.primary : theme.colors.secondary)};
`;

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
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
            name="contact/index"
            options={{
              tabBarLabel: ({ focused }) => (
                <TabBarItemLabel focused={focused}>Contact</TabBarItemLabel>
              ),
              tabBarIcon: ({ focused }) => ( <Feather name="feather" size={24} color={focused ? colors.primary : colors.secondary} />),
            }}
        />

    </Tabs>
  );
}