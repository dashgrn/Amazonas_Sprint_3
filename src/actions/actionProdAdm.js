import { typesProductAdmin} from '../types/types'
import { db } from '../firebase/firebaseConfig'
import { addDoc, collection } from '@firebase/firestore'

export const addProdAsync = (newProd) => {

    return(dispatch) => {
        addDoc(collection(db, 'products'), newProd)
            .then(resp => {
                dispatch(addProdSync(newProd)) //making the status visisble in devTools
            })
            .catch( err => {
                console.log(err.message)
            })
    }
} 

export const addProdSync = (product) => {
    return{
        type: typesProductAdmin.add,
        payload: product
    }
}