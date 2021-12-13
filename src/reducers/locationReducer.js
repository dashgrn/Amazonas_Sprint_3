import { types } from "../types/types";

const initalState = {
    loc: ''
}

export const locationReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.location:
            return {
                loc: action.payload
            }
    
        default:
            return state
    }
}