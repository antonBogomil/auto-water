import {LOGOUT, LOGIN} from '../types';

const initialState = {
    user: undefined,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload.user,
            };
        case LOGOUT :
            return {
                user: undefined
            };
        default:
            return state;
    }
};
export default authReducer;