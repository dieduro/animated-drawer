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
              drawerLabel: ScreenTitles[ScreenName.FAVOURITES],
              headerShown: false,
            }}
        />
        <ScreenLayout name={ScreenName.FAVOURITES}>
        <View>
            <Text>FAVOURITES</Text>
        </View>
        </ScreenLayout>
    </>
  );
};

export default Page;
