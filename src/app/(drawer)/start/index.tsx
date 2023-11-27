import React from 'react';
import { Tabs } from 'expo-router';
import ScreenLayout from '../../../components/ScreenLayout';
import { ScreenComponent } from '../../../navigation/types';
import { ScreenName } from '../../../navigation/enum';
import ScreenWrapper from '../../../components/ScreenWrapper';
import Title from '../../../components/ScreenTitle';


const Page: ScreenComponent<ScreenName.START> = () => {
  return  (
    <ScreenLayout name={ScreenName.START}>
      <Tabs.Screen/>
        <ScreenWrapper>
          <Title>Home</Title>
        </ScreenWrapper>
    </ScreenLayout>
  );
};

export default Page;
