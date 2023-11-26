import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenName, ScreenTitles } from "../navigation/enum";
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "../components/Drawer/CustomDrawer";

const Layout = () => {
    return (
        <SafeAreaProvider>
            <Drawer 
                screenOptions={{ overlayColor: 'transparent'}}
                drawerContent={() => <CustomDrawer />}
            >
                <Drawer.Screen
                    name={ScreenName.START}
                    options={{ drawerLabel: ScreenTitles[ScreenName.START], headerShown: false }}
                />
                <Drawer.Screen
                    name={ScreenName.CART}
                    options={{ drawerLabel: ScreenTitles[ScreenName.CART], headerShown: false }}
                />
                <Drawer.Screen
                    name={ScreenName.FAVOURITES}
                    options={{ drawerLabel: ScreenTitles[ScreenName.FAVOURITES], headerShown: false }}
                />
                <Drawer.Screen
                    name={ScreenName.ORDERS}
                    options={{ drawerLabel: ScreenTitles[ScreenName.ORDERS], headerShown: false }}
                />
            </Drawer>
    </SafeAreaProvider>
    )
}

export default Layout;
