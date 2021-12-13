import { typesProduct, types } from "../types/types";


const initialState = {
    products: [],
    query:''
}

export const prodReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProduct.list:
            return {
                products: [...action.payload]
            }
        case types.search:
            return {
                products: action.payload
            }
        default:
            return state;
    }

}