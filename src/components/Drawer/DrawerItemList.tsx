import React from 'react';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import DrawerItem from './DrawerItem';
import styled from 'styled-components/native';
import { ScreenName, Screens } from '../../navigation/enum';

const Wrapper = styled(View)`
  padding-left: 16px;
  gap: 16px;
  width: 100%;
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
        {Screens.map(({ name }: { name: string }) => (
          (name.charAt(0) !== '_' && name.charAt(0) !== '[') && (
            <DrawerItem
              key={name}
              title={name as ScreenName}
              onPress={() => handlePress(name)}
              active={activeRouteName === name}
          />
          )
        ))}
    </Wrapper>
  );
};

export default DrawerItemList;
