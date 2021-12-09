import { typesProduct } from "../types/types";

const initialState = {
    products: [],
}

export const prodReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProduct.list:
            return {
                products: [...action.payload]
            }
        default:
            return state;
    }
    
}