import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import DashboardStackNavigator from './DashboardStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

export default (DashboardDrawerNavigator = createDrawerNavigator({
  Dashboard: DashboardStackNavigator,
  Settings: SettingsScreen
}));
