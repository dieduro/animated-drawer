import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenName } from './enum';

type RootStackParamList = {
  [ScreenName.START]: undefined;
  [ScreenName.CART]: undefined;
  [ScreenName.FAVOURITES]: undefined;
  [ScreenName.ORDERS]: undefined;
  [ScreenName.CONTACT]: undefined;
};

export type ScreenProps<Name extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Name>;

/**
 * Represents the `navigation` object for the app.
 */
export type AppStackNavigationProp = NativeStackNavigationProp<RootStackParamList, ScreenName>;

/**
 * Builds the component type for a screen.
 * @example const MyScreen: SC<ScreenName.MyScreen> = ({ navigation, route }) => { ... };
 */
export type ScreenComponent<Name extends keyof RootStackParamList> = (props: ScreenProps<Name>) => JSX.Element;
