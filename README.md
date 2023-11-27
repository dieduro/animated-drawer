# Animated Drawer challenge

This is a React Native app that features an animated drawer as its main navigation. It also implements nested tabs and stack navigators.

## Technologies Used

- React Native
- Expo
- Expo router
- TypeScript
- Styled-components
- react-native-reanimated

## Demo

## Thought proccess

I faced this project wanting to implement Expo Router because I had not used it before. And this was definitely the most challeging and demanding part of the process. Understanding how to structure the app so it would work as expected took me several iterations and quite some time going through [Expo Router](https://docs.expo.dev/routing/introduction/) and [React Navigation](https://reactnavigation.org/docs/drawer-based-navigation/) docs. The missing part of this proccess is to understand why Expo Router keeps naming routes with the `/index` suffix when it's not supposed to (ie: `cart/index`).

The next most challenging feature was the animated drawer which I was able to achieve by leveraging `react-native-reanimated` API and implementing a `CustomDrawer`. It was interesting and funny to get to make it work as the demo. In a following iteration I'd like to apply some duration and easing to the opening/closing animation to make it smoother and fancier.

For styling I choosed `styled-components` since it's a tool that I'm familiar with and I consider it lets you code very flexible, readble and easy to re-use components while keeping most of the CSS properties.


