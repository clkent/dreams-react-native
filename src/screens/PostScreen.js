import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Post a dream!</Text>
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
