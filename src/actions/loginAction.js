import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth"
import { google, facebook} from "../firebase/firebaseConfig"
import { types } from "../types/types"


//Log with email and password
export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth()       
        signInWithPopup(auth, google) 
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName)) 
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth()       
        signInWithPopup(auth, facebook)  
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))  
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const loginEmailPassword = (email, password) =>{
    return(dispatch) =>{
        const auth= getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then (({user})=>{
            dispatch(login(user.uid, user.displayName))
            console.log('Bienvenido ' + user.displayName)
        })
        .catch(e=>{
            console.log(e)
            console.log('El usuario no existe')
        })
    }
}