import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';
import { signUpUser, login } from '../actions/authAction';
import Input from '../components/Input';

//FIXME: keep adjusting below class to work with current setup
export class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  onSubmit(values) {
    const { username, password, name, email } = values;
    const user = { username, password, name, email };
    return this.props
      .dispatch(signUpUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="name">Name</label>
          <Field component={Input} type="text" name="name" />
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="email">Email</label>
          <Field component={Input} type="text" name="email" />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign up
          </button>
        </form>
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

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUpScreen);
