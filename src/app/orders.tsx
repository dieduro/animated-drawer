
import React from 'react';
import { Text } from 'react-native';
import ScreenLayout from '../screens/ScreenLayout';
import { ScreenName } from '../navigation/enum';

const Page = () => {

  return (
    <ScreenLayout name={ScreenName.ORDERS}>
      <Text>Orders</Text>
    </ScreenLayout>
  );
};

export default Page;
