import React from 'react';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import DrawerItem from './DrawerItem';
import styled from 'styled-components/native';
import { ScreenName, ScreenTitles, Screens } from '../../navigation/enum';

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

const SignOut = styled(DrawerItem)`
  margin-top: 32px;
`;

const DrawerItemList = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const state = navigation.getState();
  const routes = state.routes || [];

  const handlePress = (route: string) => {
    navigate(route as never);
  };
  const activeRouteName = routes[state.index]?.name || ScreenName.START;

  return (
    <Wrapper>
      <ScreensMenu>
        {Screens.map(({ name }: { name: string }) => (
          (name.charAt(0) !== '_' && name.charAt(0) !== '[') && (
            <DrawerItem
              key={name}
              title={ScreenTitles[name as ScreenName]}
              onPress={() => handlePress(name)}
              active={activeRouteName === name}
          />
          )
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
