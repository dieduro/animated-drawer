import React from 'react';
import { Text, View } from 'react-native';
import { ScreenName, ScreenTitles } from '../../../navigation/enum';
import ScreenLayout from '../../../screens/ScreenLayout';
import Drawer from 'expo-router/drawer';

const Page = () => {

  return  (
    <>
      <Drawer.Screen
          options={{
            drawerLabel: ScreenTitles[ScreenName.CART],
            headerShown: false,
          }}
      />
      <ScreenLayout name={ScreenName.CART}>
        <View>
          <Text>CART</Text>
        </View>
      </ScreenLayout>
      </>
  );
};

export default Page;
