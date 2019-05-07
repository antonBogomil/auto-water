import {api} from "../api";
import {store} from "../store";
import {loginSuccess} from "../store/actions/auth";

export function authCheck() {
    api.get('/auth', (data) => {
        if (data && data.success) {
            store.dispatch(loginSuccess(data))
        }
    })
}
