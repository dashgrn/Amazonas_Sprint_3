import { db } from "../firebase/firebaseConfig";
import { getDocs, collection } from "@firebase/firestore"
import { typesProduct } from "../types/types";

// list docs

//sync action
export const list = (products) => {
    return {
        type: typesProduct.list,
        payload: products
    }
}

//async action
export const listProducts = () => {
    return async (dispatch) => {
        const prodData = await getDocs(collection(db, 'products'))
        let productsArray = []
        console.log('raw data from db', prodData)
        prodData.forEach((doc) => {
            console.log('doc from db', doc.data())
            productsArray.push({
                ...doc.data()
            })
        })
        dispatch(list(productsArray))
    }
}