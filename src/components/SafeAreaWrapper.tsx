import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled(View)<{ top: number; bottom: number }>`
    padding-top: ${({ top }) => top}px;
    padding-horizontal: 16px;
`;

const SafeAreaWrapper = ({ children }: { children: React.ReactNode }) => {
    const { top, bottom } = useSafeAreaInsets();

    return (
        <Wrapper top={top} bottom={bottom} >
            {children}
        </Wrapper>
    )
}

export default SafeAreaWrapper;