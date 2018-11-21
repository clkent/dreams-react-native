import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Calendarrrrr!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
