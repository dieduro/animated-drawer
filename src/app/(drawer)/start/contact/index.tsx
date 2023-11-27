import React from 'react';
import { Text, View } from 'react-native';
import { ScreenComponent } from '../../../../navigation/types';
import { ScreenName } from '../../../../navigation/enum';
import { Link, Stack } from 'expo-router';
import ScreenLayout from '../../../../components/ScreenLayout';
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

const Page: ScreenComponent<ScreenName.CONTACT> = () => {

  return  (
    <ScreenLayout name={ScreenName.START}>
      <Stack.Screen options={{ headerShown: true, title: 'Contact' }} />
      <ScreenWrapper>
          <Title>Contact</Title>
          <Link href="/start/contact/new-page">
            <Text>Go to New Page</Text>
          </Link>
        </ScreenWrapper>
    </ScreenLayout >
  );
};

export default Page;
