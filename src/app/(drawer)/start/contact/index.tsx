import React from 'react';
import { Text, View } from 'react-native';
import { ScreenComponent } from '../../../../navigation/types';
import { ScreenName } from '../../../../navigation/enum';
import ScreenLayout from '../../../../screens/ScreenLayout';
import { Tabs } from 'expo-router';


const Page: ScreenComponent<ScreenName.CONTACT> = () => {

  return  (
    <>
    <Tabs.Screen/>
      <ScreenLayout name={ScreenName.CONTACT}>
        <View><Text>Contact!!</Text></View>
      </ScreenLayout>
    </>
  );
};

export default Page;
