import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import AdminList from './components/AdminList';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
					<Scene key="signUp" component={SignUp} title="Please Sign Up" />
				</Scene>
				<Scene key="main">
					<Scene key="adminForm" component={AdminList} title="test" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
