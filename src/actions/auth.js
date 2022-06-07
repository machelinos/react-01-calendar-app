import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";

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
            const errorBody = await error.json();
            console.log(errorBody);
            if(errorBody.message){
                Swal.fire('Error',errorBody.message,'error');
            }
        }
    }
}

export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken('auth/new',{name, email, password},'POST');

            if(!resp.ok) throw resp;

            const body = await resp.json();

            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({uid: body.uid, name:body.name}))


        } catch (error) {
            const errorBody = await error.json();
            console.log(errorBody);
            if(errorBody.message){
                Swal.fire('Error',errorBody.message,'error');
            }
            
        }

    }
}

const login = (user) => {
    return {
        type: types.authLogin,
        payload: user
    }
}
