/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import styled from 'styled-components/native';
import { ScreenName, ScreenTitles } from '../navigation/enum';
import { 
  useNavigation, 
  ParamListBase, 
} from '@react-navigation/native';
import { DrawerNavigationProp, useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const MainWrapper = styled(Animated.View)`
  background-color: #1b1d2e;
  width: 100%;
`;

const Wrapper = styled(Animated.View)`
  height: 100%;
  background-color: #FFF;
  border-top-left-radius: 24px;
`;

const TitleWrapper = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 24px;
`;

const Title = styled(Text)`
    font-size: 20px;
    color: #64748bCC;
    letter-spacing: 2px;
`;

const ScreenLayout = ({ name, children }: { name: ScreenName; children: React.ReactNode }) => {
  const iconColor = '#64748b66';
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const { top } = useSafeAreaInsets();
  const drawerProgress = useDrawerProgress();
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
      <Wrapper style={viewStyles}>
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
