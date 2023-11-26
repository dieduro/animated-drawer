import React from 'react';
import ScreenLayout from '../screens/ScreenLayout';
import { Text } from 'react-native';
import { ScreenName } from '../navigation/enum';

const Favourites = () => {

  return (
        <ScreenLayout name={ ScreenName.FAVOURITES}>
            <Text>FAVOURITES</Text>
        </ScreenLayout>);
};

export default Favourites;