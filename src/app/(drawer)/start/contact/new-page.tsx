import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const ScreenWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`;

const NewPage = () => {
  return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: 'New Page' }} />
            <ScreenWrapper>
          <Title>New Page! [CONTACT]</Title>
          <Link href="/start/contact/">
            <Text>Back to Contact</Text>
          </Link>
        </ScreenWrapper>
        </View>
  );
};

export default NewPage;