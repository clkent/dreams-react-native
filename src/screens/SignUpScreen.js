import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class PostScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Sign up</Text>
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
