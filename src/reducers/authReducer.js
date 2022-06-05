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
        default:
            return state;
    }
}