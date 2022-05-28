import { addHours } from "date-fns/esm";
import { types } from "../types/types";

const initialState = {
    events: [
        {
            title: 'Cumpleaños del jefe',
            start: new Date().getTime(),
            end: addHours(new Date(), 2).getTime(),
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
        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventClearActive:
            return {
                ...state,
                activeEvent: null
            }
        default:
            return state;
    }
}