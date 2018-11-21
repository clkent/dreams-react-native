import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import DashboardTabNavigator from './DashboardTabNavigator';
import HomeTabNavigator from './HomeTabNavigator';

const Main = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Dashboard: DashboardTabNavigator,
    Auth: HomeTabNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(Main);
