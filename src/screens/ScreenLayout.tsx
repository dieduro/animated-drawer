/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import styled from 'styled-components/native';
import { ScreenName, ScreenTitles } from '../navigation/enum';
import { 
  useNavigation, 
  ParamListBase, 
} from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';


const TitleWrapper = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

const Title = styled(Text)`
    font-size: 24px;
    color: #64748b;
`;

const ScreenLayout = ({ name, children }: { name: ScreenName; children: React.ReactNode }) => {
  const iconColor = '#64748b';
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
        <SafeAreaWrapper>
            <TitleWrapper>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu-outline" size={24} color={iconColor} />
            </ TouchableOpacity>
                <Title>{ScreenTitles[name]}</Title>
            </TitleWrapper>
            {children}
        </SafeAreaWrapper>
  );
};

export default ScreenLayout;
