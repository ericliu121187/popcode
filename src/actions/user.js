import {createAction} from 'redux-actions';
import identity from 'lodash/identity';

export const logIn = createAction('LOG_IN');

export const logOut = createAction('LOG_OUT');

export const confirmIdentity = createAction('CONFIRM_IDENTITY', identity);

export const rejectIdentity = createAction('REJECT_IDENTITY', identity);

export const userAuthenticated = createAction('USER_AUTHENTICATED', identity);

export const userLoggedOut = createAction('USER_LOGGED_OUT');
