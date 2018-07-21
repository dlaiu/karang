import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    AUTH_EMAIL_CHANGED,
    AUTH_PASSWORD_CHANGED,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAIL,
    AUTH_LOGIN_USER
} from './types';

export const authEmailChanged = (text) => {
    console.log(text);
    return {
        type: AUTH_EMAIL_CHANGED,
        payload: text
    };
};

export const authPasswordChanged = (text) => {
    console.log(text);
    return {
        type: AUTH_PASSWORD_CHANGED,
        payload: text
    };
};

export const authLoginUser = ({ auth_email, auth_password }) => {
    return (dispatch) => {
        dispatch({ type: AUTH_LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(auth_email, auth_password)
            .then(user => authLoginUserSuccess(dispatch, user))
            .catch(() => authLoginUserFail(dispatch));
    };
};

const authLoginUserFail = (dispatch) => {
    dispatch({ type: AUTH_LOGIN_USER_FAIL });
};

const authLoginUserSuccess = (dispatch, user) => {
    dispatch({
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};