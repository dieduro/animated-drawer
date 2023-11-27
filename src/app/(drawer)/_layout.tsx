import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomDrawer from '../../components/Drawer/CustomDrawer';
import { ScreenName, ScreenTitles } from '../../navigation/enum';
import { StyledThemeProvider } from '../../context/Theme/ThemeContext';

const Layout = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledThemeProvider>
        <SafeAreaProvider>
            <Drawer 
                screenOptions={{
                  header: () => null,
                  overlayColor: 'transparent',
                  drawerStyle: {
                    width: width * 0.5,
                  },
                }}
                drawerContent={(props) => <CustomDrawer {...props} />}
                initialRouteName={ScreenName.START}
            >
              <Drawer.Screen
                  name={ScreenName.START}
                  options={{
                    headerShown: false,
                  }}
                />
              <Drawer.Screen
                key={ScreenName.CART}
                name={ScreenName.CART}
                options={{
                  drawerLabel: ScreenTitles[ScreenName.CART],
                  headerShown: false,
                }}
              />
              <Drawer.Screen
                key={ScreenName.FAVOURITES}
                name={ScreenName.FAVOURITES}
                options={{
                  drawerLabel: ScreenTitles[ScreenName.FAVOURITES],
                  headerShown: false,
                }}
              />
              <Drawer.Screen
                key={ScreenName.ORDERS}
                name={ScreenName.ORDERS}
                options={{
                  drawerLabel: ScreenTitles[ScreenName.ORDERS],
                  headerShown: false,
                }}
              />
            </Drawer>
      </SafeAreaProvider>
    </StyledThemeProvider>
  );
};

export default Layout;
