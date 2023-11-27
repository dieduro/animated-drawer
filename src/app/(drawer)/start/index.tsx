import React from 'react';
import { Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import ScreenLayout from '../../../screens/ScreenLayout';
import { ScreenComponent } from '../../../navigation/types';
import { ScreenName } from '../../../navigation/enum';

const Page: ScreenComponent<ScreenName.START> = () => {
  return  (
    <>
      <Tabs.Screen/>
      <ScreenLayout name={ScreenName.START}>
        <View><Text>Home</Text></View>
      </ScreenLayout>
    </>
  );
};

export default Page;
