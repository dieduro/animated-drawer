import React from "react";
import { useNavigation } from "expo-router";
import { View } from "react-native";
import ListItem from "./ListItem";

const DrawerItemList = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const routes = navigation.getState().routes || [];

  const handlePress = (route: string) => {
    navigate(route as never);
  };

  return (
    <View>
        {routes.map((route) => (
        <ListItem
          key={route.name}
          title={route.name}
          onPress={() => handlePress(route.name)}
        />
      ))}
    </View>
  );
}

export default DrawerItemList;
