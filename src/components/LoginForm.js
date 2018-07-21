import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { authEmailChanged, authPasswordChanged, authLoginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
	onEmailChange(text){
        this.props.authEmailChanged(text);
    }

    onPasswordChange(text){
        this.props.authPasswordChanged(text);
    }

    onButtonPress() {
        const {auth_email, auth_password} = this.props;

        this.props.authLoginUser({auth_email, auth_password});
    }	

	renderError(){
        if(this.props.auth_error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.auth_error}
                    </Text>
                </View>
            );
        }
    }

	renderButton(){
        if(this.props.loading) {
            return <Spinner size="large" />;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

	render() {
		return (
			<Card>
                <View style={styles.logoWrapperStyle}>
                    <Image
                        style={{ height: 220, width: 220}}
                        source={require('../images/first_logo.png')}
                    />
                    <Text style={styles.subtitleStyle}>Recycling Made Easy</Text>

                </View>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.auth_email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.auth_password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    <Button onPress={() => Actions.signUp()}>
                        Sign Up
                    </Button>
                </CardSection>
            </Card>
		);
	}
}

const styles = {
    logoWrapperStyle: {
        borderBottomWidth: 1,
        padding: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: '#ddd',
    },  
    subtitleStyle:{
        color: '#003300',
        fontStyle: 'italic'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { auth_email, auth_password, auth_error, auth_loading } = auth;

    return { auth_email, auth_password, auth_error, auth_loading };
};

export default connect(mapStateToProps, { authEmailChanged, authPasswordChanged, authLoginUser })(LoginForm);
