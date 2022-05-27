import { addHours } from "date-fns/esm";
import { types } from "../types/types";

const initialState = {
    events: [
        {
            title: 'Cumpleaños del jefe',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgcolor: '#fafafa',
            user: {
              _id: '12321',
              name: 'Joy M'
            }
          }
    ],
    activeEvent: null

}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        default:
            return state;
    }
}