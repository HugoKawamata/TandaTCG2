import history from '../store/history';
import { getApi } from '../modules/api';

export const dispatches = {
    STORE_TOKEN: 'STORE_TOKEN',
    CLEAR_TOKEN: 'CLEAR_TOKEN'
};

const client_id='86i56qn8wvv1j4'

export const signIn = code => {
    return dispatch => {
        getApi('signin', { code })
            .then(res => {
                dispatch({ type: dispatches.STORE_TOKEN, token: res.body.code });
                // history.push('/');
            })
            .catch(err => {
                console.log('error: ', err);
            }); 
    };
};