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
              drawerLabel: ScreenTitles[ScreenName.FAVOURITES],
              headerShown: false,
            }}
        />
        <ScreenLayout name={ScreenName.FAVOURITES}>
        <ScreenWrapper>
            <StyledRowWrapper>
            <Title>{ScreenTitles[ScreenName.FAVOURITES]}</Title>
            <Feather name="heart" size={32} color="black" />
          </StyledRowWrapper>
        </ScreenWrapper>
        </ScreenLayout>
    </>
  );
};

export default Page;
