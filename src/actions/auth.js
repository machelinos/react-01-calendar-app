import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchSinToken('auth',{email, password},'POST');

            if(!resp.ok) throw resp;

            const body = await resp.json();
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({uid: body.uid, name:body.name}))

            
        } catch (error) {
            console.log(await error.json());
        }
    }
}

const login = (user) => {
    return {
        type: types.authLogin,
        payload: user
    }
}