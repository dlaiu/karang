import {
	SIGNUP_EMAIL_CHANGED,
	SIGNUP_PASSWORD_CHANGED,
	SIGNUP_LOGIN_USER_SUCCESS,
	SIGNUP_LOGIN_USER_FAIL,
	SIGNUP_USER_FAIL,
	SIGNUP_LOGIN_USER,
	SIGNUP_USER,
	RESET_STATE
} from '../actions/types';

const INITIAL_STATE = { 
    signup_email: '',
    signup_password: '',
    signup_user: null,
    signup_loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_STATE:
            return { INITIAL_STATE };
        case SIGNUP_EMAIL_CHANGED:
            return { ...state, signup_email: action.payload };
        case SIGNUP_PASSWORD_CHANGED:
            return { ...state, signup_password: action.payload};
        case SIGNUP_LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, signup_user: action.payload };
        case SIGNUP_LOGIN_USER:
            return { ...state, signup_loading: true, signup_error: ''};
        case SIGNUP_LOGIN_USER_FAIL:
            return { ...state, signup_error: '', signup_password: '', signup_loading: false};
        case SIGNUP_USER:
            return { ...state, signup_loading: true, signup_error: ''};
        case SIGNUP_USER_FAIL:
            return { ...state, signup_error: 'Sign Up Failed', signup_password: '', signup_loading: false};
        default:
            return state;
    }
};

