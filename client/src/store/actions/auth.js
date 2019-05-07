import {LOGIN, LOGOUT} from './../types';

export const loginSuccess = (data) => {
    return {
        type: LOGIN,
        payload: {
            user: data.user
        }
    }
};
export const logout =()=>{
    return {
        type: LOGOUT,
    }
};


