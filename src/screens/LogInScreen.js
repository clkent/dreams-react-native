import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Log in'
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Login</Text>
        <Button title="log in" onPress={this._signInAsync} />
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
