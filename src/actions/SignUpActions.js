import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
//import { emailChanged, passwordChanged, loginUser } from '../actions';
import {
	SIGNUP_LOGIN_USER_SUCCESS,
    SIGNUP_USER,
    SIGNUP_USER_FAIL,
    SIGNUP_EMAIL_CHANGED,
    SIGNUP_PASSWORD_CHANGED,
    RESET_STATE
} from './types';

export const signupEmailChanged = (text) => {
    console.log(text);
    return {
        type: SIGNUP_EMAIL_CHANGED,
        payload: text
    };
};

export const signupPasswordChanged = (text) => {
    console.log(text);
    return {
        type: SIGNUP_PASSWORD_CHANGED,
        payload: text
    };
};

export const resetState = () => {
	return {
		type: RESET_STATE
	};
};

export const createUser = ({ signup_email, signup_password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });

        firebase.auth().createUserWithEmailAndPassword(signup_email, signup_password)
        	.then(() => {
        		firebase.auth().signInWithEmailAndPassword(signup_email, signup_password)
        			.then(signup_user => loginUserSuccess(dispatch, signup_user));
        	})
		    .catch(() => signUpFail(dispatch));
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const signUpFail = (dispatch, user) => {
	dispatch({
		type: SIGNUP_USER_FAIL,
		payload: user
	});
}