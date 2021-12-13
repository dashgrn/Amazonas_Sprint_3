import { db } from '../firebase/firebaseConfig'
import { getDocs, collection, query, where } from "@firebase/firestore"
import { types } from '../types/types'


//search
export const prodSearchAction = (search) => {

    return async (dispatch) => {

        const productCollections = collection(db, "products");
        console.log('search query', search.searchQuery)
        const q = query(productCollections, where("title", "==", search.searchQuery))
        const datos = await getDocs(q);
        console.log('search dada return', datos)
        const productsArrSearch = [];
        datos.forEach((docu) => {
            productsArrSearch.push(docu.data())
        })
        console.log(productsArrSearch)
        dispatch(searchSync(productsArrSearch))
    }
}

export const searchSync = (search) => {
    return {
        type: types.search,
        payload: search
    }
}