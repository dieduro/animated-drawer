
import React from "react";
import { Text, View } from "react-native";
import { styled } from "styled-components/native";
import DrawerItemList from "./DrawerItemList";

const Wrapper = styled(View)`
    background-color: #16203A;
    flex: 1;
    padding: 58px 16px 0;
    align-items: center;
`;

const Title = styled(Text)`
    font-size: 48px;
    color: #fff;
    text-align: center;
`;

const CustomDrawer = () => {

    return (
        <Wrapper>
            <Title>Die</Title>
            <DrawerItemList />
        </Wrapper>
    )
}

export default CustomDrawer;