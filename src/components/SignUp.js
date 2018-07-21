import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { signupEmailChanged, signupPasswordChanged, createUser, resetState } from '../actions';

class SignUp extends Component {

	onEmailChange(text) {
        this.props.signupEmailChanged(text);
    }

    onPasswordChange(text) {
        this.props.signupPasswordChanged(text);
    }

    onButtonPress() {
        const { signup_email, signup_password } = this.props;

        this.props.createUser({ signup_email, signup_password });
    }

	renderError() {
        if (this.props.signup_error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.signup_error}
                    </Text>
                </View>
            );
        }
    }

	renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign Up
            </Button>
        );
    }

	render() {
		return (
			<Card>
				<CardSection>
					<Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.signup_email} 
                    />
				</CardSection>

				<CardSection>
					<Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.signup_password}
                    />
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
		);
	}

}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    const {signup_email, signup_password, signup_error, signup_loading} = state.signUp;

    return {signup_email, signup_password, signup_error, signup_loading};
};

export default connect(mapStateToProps, { signupEmailChanged, signupPasswordChanged, createUser, resetState })(SignUp);
