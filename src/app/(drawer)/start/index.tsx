import React from 'react';
import { Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import styled from 'styled-components/native';
import ScreenLayout from '../../../components/ScreenLayout';
import { ScreenComponent } from '../../../navigation/types';
import { ScreenName } from '../../../navigation/enum';

const ScreenWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`;

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
