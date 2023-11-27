/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { styled } from 'styled-components/native';
import { Text } from 'react-native';

const primaryColor = '#EF6767';
const secondaryColor = '#1b1d2e';
const TabBarItemLabel = styled(Text)<{ focused: boolean }>`
  color: ${({ focused }) => (focused ? primaryColor : secondaryColor)};
`;

export default function TabsLayout() {
  
  
  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: ({ focused }) => (
                  <TabBarItemLabel focused={focused}>Home</TabBarItemLabel>
              ),
              tabBarIcon: ({ focused }) => (
                <Feather name="home" size={24} color={focused ? primaryColor : secondaryColor} />
              ),
            }}
        />
        <Tabs.Screen
            name="contact/index"
            options={{
              tabBarLabel: ({ focused }) => (
                <TabBarItemLabel focused={focused}>Contact</TabBarItemLabel>
              ),
              tabBarIcon: ({ focused }) => ( <Feather name="feather" size={24} color={focused ? primaryColor : secondaryColor} />),
            }}
        />

    </Tabs>
  );
}