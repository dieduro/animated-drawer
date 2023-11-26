import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { ScreenName, ScreenTitles } from '../../navigation/enum';

const ItemTitle = styled(Text)`
    font-size: 24px;
    color: #64748b;
`;

const ListItem = ({ title, onPress }: { title: ScreenName; onPress: () => void}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>  
                <ItemTitle>{ScreenTitles[title]}</ItemTitle>
            </TouchableOpacity>
        </View>
    );
}

export default ListItem;