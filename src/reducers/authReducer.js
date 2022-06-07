import { types } from "../types/types";

const initialState = {
    checking: true,
    // uid,
    //name
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.authStartLogin:
            return state;
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        default:
            return state;
    }
}