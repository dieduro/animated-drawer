/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ScreenName, ScreenTitles } from '../../../navigation/enum';
import ScreenLayout from '../../../components/ScreenLayout';
import Drawer from 'expo-router/drawer';
import ScreenWrapper from '../../../components/ScreenWrapper';
import Title from '../../../components/ScreenTitle';
import RowWrapper from '../../../components/RowWrapper';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const StyledRowWrapper = styled(RowWrapper)`
  gap: 16px;
`;

const Page = () => {

  return  (
    <>
      <Drawer.Screen
          options={{
            drawerLabel: ScreenTitles[ScreenName.ORDERS],
            headerShown: false,
          }}
      />
      <ScreenLayout name={ScreenName.ORDERS}>
        <ScreenWrapper>
        <StyledRowWrapper>
            <Title>{ScreenTitles[ScreenName.ORDERS]}</Title>
            <Feather name="feather" size={32} color="black" />
          </StyledRowWrapper>
        </ScreenWrapper>
      </ScreenLayout>
    </>
  );
};

export default Page;
