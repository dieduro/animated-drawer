import React from 'react';
import ScreenLayout from '../screens/ScreenLayout';
import { ScreenComponent } from '../navigation/types';
import { ScreenName } from '../navigation/enum';
import { View } from 'react-native';


const Page: ScreenComponent<ScreenName.START> = () => {

  return  (
        <ScreenLayout name={ScreenName.START}>
          <View></View>
        </ScreenLayout>
      
  );
};

export default Page;
