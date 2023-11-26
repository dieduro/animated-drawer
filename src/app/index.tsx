import React from 'react';
import { ScreenName } from '../navigation/enum';
import ScreenLayout from '../screens/ScreenLayout';
import { ScreenComponent } from '../navigation/types';
import { Text, View } from 'react-native';

const Page: ScreenComponent<ScreenName.START> = () => {

  return  (
      <ScreenLayout name={ScreenName.START}>
        <View>
          <Text>CART</Text>
      </View>
      </ScreenLayout>
  );
};

export default Page;
