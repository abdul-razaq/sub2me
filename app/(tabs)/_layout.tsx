import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { DocumentText, Home, MoneySend, Profile } from 'iconsax-react-native';
import Colors from '@/theme/colors';
import { FontFamily } from '@/theme/fonts';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { color: Colors.primary.DEFAULT },
        tabBarActiveTintColor: Colors.primary.DEFAULT,
        tabBarInactiveTintColor: Colors.primary.DEFAULT,
        tabBarLabelStyle: { fontSize: 12, fontFamily: FontFamily['Satoshi-Medium'] },
        tabBarStyle: {
          height: 90,
        },
      }}
      sceneContainerStyle={{ backgroundColor: 'white' }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Home size={size} color={color} variant={focused ? 'Bold' : 'Linear'} />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MoneySend size={size} color={color} variant={focused ? 'Bold' : 'Linear'} />
          ),
          title: 'Payment',
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <DocumentText size={size} color={color} variant={focused ? 'Bold' : 'Linear'} />
          ),
          title: 'History',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <Profile size={size} color={color} variant={focused ? 'Bold' : 'Linear'} />
          ),
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
