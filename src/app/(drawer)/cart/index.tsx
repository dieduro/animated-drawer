import React from 'react';
import { Text, View } from 'react-native';
import { ScreenName, ScreenTitles } from '../../../navigation/enum';
import ScreenLayout from '../../../components/ScreenLayout';
import Drawer from 'expo-router/drawer';
import styled from 'styled-components/native';

const ScreenWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`;

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
        <ScreenWrapper>
          <Title>CART</Title>
        </ScreenWrapper>
      </ScreenLayout>
      </>
  );
};

export default Page;
