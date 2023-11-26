import React from 'react';
import ScreenLayout from '../screens/ScreenLayout';
import { ScreenName } from '../navigation/enum';
import { Text } from 'react-native';

const Favourites = () => {

  return (
        <ScreenLayout name={ ScreenName.FAVOURITES}>
            <Text>FAVOURITES</Text>
        </ScreenLayout>);
};

export default Favourites;