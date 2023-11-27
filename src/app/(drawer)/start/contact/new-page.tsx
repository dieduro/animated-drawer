import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import ScreenWrapper from '../../../../components/ScreenWrapper';
import Title from '../../../../components/ScreenTitle';

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