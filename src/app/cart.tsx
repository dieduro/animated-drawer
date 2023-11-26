import React from 'react';
import { ScreenName } from '../navigation/enum';
import ScreenLayout from '../screens/ScreenLayout';
import { Text, View } from 'react-native';
import { ScreenComponent } from '../navigation/types';

const Page: ScreenComponent<ScreenName.CART> = () => {

  return  (
    <ScreenLayout name={ScreenName.CART}>
      <View>
        <Text>CART</Text>
      </View>
    </ScreenLayout>
  );
};

export default Page;