/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { ScreenName, ScreenTitles, Screens } from '../../navigation/enum';
import CustomDrawerItem from './CustomDrawerItem';
import {
  DrawerNavigationState,
  ParamListBase,
} from '@react-navigation/native';

const Wrapper = styled(View)`
margin-top: 32px;
  padding-left: 16px;
  gap: 16px;
  width: 100%;
`;

const ScreensMenu = styled(View)`
  width: 100%;
  margin-bottom: 32px;
`;

const Divider = styled(View)`
  height: 1px;
  border: 1px solid #64748bCC;
`;

const SignOut = styled(CustomDrawerItem)`
  margin-top: 32px;
`;

const DrawerItemList = ({ state }: { state: DrawerNavigationState<ParamListBase> }) => {
  const { navigate } = useNavigation();
  const activeRoute = state.routes[state.index].name;

  const handlePress = (route: string) => {
    navigate(route as never);
  };

  return (
    <Wrapper>
      <ScreensMenu>
        {Screens.map(({ name }: { name: string }) => (
            <CustomDrawerItem
              key={name}
              title={ScreenTitles[name as ScreenName]}
              onPress={() => handlePress(name)}
              active={activeRoute === name}
          />
        ))}
      </ScreensMenu>
      <Divider />
      <SignOut
        title="Sign Out"
        onPress={() => {}}
      />
    </Wrapper>
  );
};

export default DrawerItemList;
