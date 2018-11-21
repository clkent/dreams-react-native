import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity, View, Text } from 'react-native';

import DashboardTabNavigator from './DashboardTabNavigator';

export default (DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: {
    screen: DashboardTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Dream Recall',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>settings</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }
}));
