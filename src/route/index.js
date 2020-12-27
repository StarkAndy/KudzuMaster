import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import ScreenA from '../pages/ScreenA';
import ScreenB from '../pages/ScreenB';
import NewsScreen from '../pages/NewsSreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
