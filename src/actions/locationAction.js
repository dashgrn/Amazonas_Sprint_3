import { types } from "../types/types";

export const getLocation = (location) => {
    return {
        type: types.location,
        payload: location
    }
}