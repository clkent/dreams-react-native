import React from 'react';
import { ScrollView, View, StyleSheet, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>DREAM RECALL</Text>
          <Text style={styles.textStyle}>
            What are your dreams trying to tell you?
          </Text>
          <Text style={styles.textStyle}>
            keeping a dream journal can help unlock your unconscious mind
          </Text>
        </View>
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
          title="I have an account"
          onPress={() => this.props.navigation.navigate('LogIn')}
        />
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
