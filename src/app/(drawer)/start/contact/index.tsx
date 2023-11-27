import React from 'react';
import { Text } from 'react-native';
import { ScreenComponent } from '../../../../navigation/types';
import { ScreenName } from '../../../../navigation/enum';
import { Link, Stack } from 'expo-router';
import ScreenLayout from '../../../../components/ScreenLayout';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import Title from '../../../../components/ScreenTitle';

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
