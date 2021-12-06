import { typesProductAdmin } from "../types/types";

const initialState = {
    products: []
}

export const prodAdmReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProductAdmin.add:
            return {
                products: [action.payload]
            }
           
        default:
            return state;
    }
}