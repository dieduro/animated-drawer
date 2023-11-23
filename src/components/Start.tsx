import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';


const Start: FC = () => {
    const { top } = useSafeAreaInsets();
    
    return (
        <View style={tw.style({'padding': top}, 'flex-1', 'bg-white-200' )}>
            <Text style={tw`text-xl text-slate-500`}>START</Text>
        </View>
    )
}

export default Start;
