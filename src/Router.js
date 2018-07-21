import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import landing from './components/landing';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
					<Scene key="signUp" component={SignUp} title="Please Sign Up" />
				</Scene>
				<Scene key="main">
					<Scene key="landing" component={landing} title="test" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
