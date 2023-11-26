
import React from 'react';
import { Text } from 'react-native';
import { styled } from 'styled-components/native';
import DrawerItemList from './DrawerItemList';
import { DrawerContentComponentProps, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Wrapper = styled.View`
    width: 100%;
    height: 100%;
`;

const DrawerMenu = styled(Animated.View)`
    flex: 1;
    align-items: center;
    background-color: #1b1d2e;
    padding: 58px 0 0;
    border-top-left-radius: 24px;
`;

const UserName = styled(Text)`
    font-size: 24px;
    font-weight: 800;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`;

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { top } = useSafeAreaInsets();

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, top],
    );
    return {
      transform: [{ translateY }],
    };
  },
  );

  return (
    <Wrapper>
        <DrawerMenu style={viewStyles} >
            <UserName>Die</UserName>
            <DrawerContentScrollView {...props} style={{ width: '100%' }}>
                <DrawerItemList />
            </DrawerContentScrollView>
        </DrawerMenu>
        </Wrapper>
  );
};

export default CustomDrawer;