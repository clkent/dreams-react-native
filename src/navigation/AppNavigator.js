import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import HomeTabNavigator from './HomeTabNavigator';
import DashboardDrawerNavigator from './DashboardDrawerNavigator';

const Main = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Dashboard: DashboardDrawerNavigator,
    Auth: HomeTabNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(Main);
