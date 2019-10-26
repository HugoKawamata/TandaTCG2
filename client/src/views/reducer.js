import { dispatches } from './actions';

const initialState = {
    token: null,
};

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case (dispatches.STORE_TOKEN):
        console.log('found: ', action);
            return {
                ...state,
                token: action.token,
            };

        case (dispatches.CLEAR_TOKEN):
            return {
                ...state,
                token: null,
            };

        default:
            return state;
    }
}
