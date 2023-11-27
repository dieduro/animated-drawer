/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ScreenName, ScreenTitles } from '../../../navigation/enum';
import ScreenLayout from '../../../components/ScreenLayout';
import Drawer from 'expo-router/drawer';
import ScreenWrapper from '../../../components/ScreenWrapper';
import Title from '../../../components/ScreenTitle';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import RowWrapper from '../../../components/RowWrapper';

const StyledRowWrapper = styled(RowWrapper)`
  gap: 16px;
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
          <StyledRowWrapper>
            <Title>{ScreenTitles[ScreenName.CART]}</Title>
            <Feather name="shopping-cart" size={32} color="black" />
          </StyledRowWrapper>
        </ScreenWrapper>
      </ScreenLayout>
      </>
  );
};

export default Page;
