import React from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

type CustomerDrawerItemProps = {
  title: string;
  onPress?: () => void;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Wrapper = styled(View)<{ active: boolean }>`
    padding: 16px;
    background-color: ${({ active }) => active ? '#EF676733' : 0};
    border-radius: 12px;
`;

const ItemTitle = styled(Text)<{ active: boolean }>`
    font-size: 20px;
    color: ${({ active }) => active ? '#EF6767' : '#FFF'};
    margin-left: 12px;
`;


const CustomDrawerItem = ({ title, onPress, active = false, style }: CustomerDrawerItemProps) => {
  return (
        <Wrapper active={active} style={style}>
            <TouchableOpacity onPress={onPress}>  
                <ItemTitle active={active}>{title}</ItemTitle>
            </TouchableOpacity>
        </Wrapper>
  );
};

export default CustomDrawerItem;