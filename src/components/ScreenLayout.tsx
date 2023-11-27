/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SafeAreaWrapper from './SafeAreaWrapper';
import styled, { useTheme } from 'styled-components/native';
import { ScreenName, ScreenTitles } from '../navigation/enum';
import { 
  useNavigation, 
  ParamListBase, 
} from '@react-navigation/native';
import { DrawerNavigationProp, useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const MainWrapper = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
`;

const Wrapper = styled(Animated.View)<{ animating: boolean }>`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: ${({ animating }) => animating ? '24px' : 0};
`;

const TitleWrapper = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 24px;
`;

const Title = styled(Text)`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.tertiary};
    letter-spacing: 2px;
`;

const ScreenLayout = ({ name, children }: { name: ScreenName; children: React.ReactNode }) => {
  const { colors } = useTheme();
  const iconColor = colors.tertiary;
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const { top } = useSafeAreaInsets();
  const drawerProgress = useDrawerProgress();
  const drawerStatus = useDrawerStatus();
  const { width } = useWindowDimensions();
  const PAGE_OFFSET = 60;

  const viewStyles = useAnimatedStyle(() => {
    const rotate = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, -8],
    );

    const offset = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, PAGE_OFFSET],
    );

    return {
      transform: [
        { translateX: width * 0.5 + offset },
        { rotate: `${rotate}deg` },
        { translateX: -width * 0.5 },
      ],
    };
  });

  const mainWrapperStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, top],
    );
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <MainWrapper style={mainWrapperStyles}>
      <Wrapper style={viewStyles} animating={drawerStatus === 'open'}>
        <SafeAreaWrapper>
            <TitleWrapper>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={28} color={iconColor} />
            </ TouchableOpacity>
                <Title>{ScreenTitles[name].toUpperCase()}</Title>
            </TitleWrapper>
            {children}
        </SafeAreaWrapper>
        </Wrapper>
      </MainWrapper>
  );
};

export default ScreenLayout;
