import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { ScreenName, ScreenTitles } from '../../navigation/enum';

type DrawerItemProps = {
  title: ScreenName;
  onPress: () => void;
  active?: boolean;
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


const DrawerItem = ({ title, onPress, active = false }: DrawerItemProps) => {
  return (
        <Wrapper active={active}>
            <TouchableOpacity onPress={onPress}>  
                <ItemTitle active={active}>{ScreenTitles[title]}</ItemTitle>
            </TouchableOpacity>
        </Wrapper>
  );
};

export default DrawerItem;