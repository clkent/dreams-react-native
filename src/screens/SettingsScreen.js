import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from 'react-native';

export default class SettingsScreen extends React.Component {
  _signOut = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <Button title="Sign Out" onPress={this._signOut} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center'
  }
});
