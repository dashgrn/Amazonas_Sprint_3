import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth"
import { types } from "../types/types"

export const register = (email, password, usrImg) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            usrImg
        }
    }
}

export const registerEmailPassword = (email, password, usrImg) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password, usrImg)
            .then(async ({ user }) => {
                // console.log("img", usrImg)   //* Desestructuramos user
                await updateProfile(auth.currentUser, { displayName: email, photoURL: usrImg })
                dispatch(register(user.email, user.uid, user.photoURL))
                console.log(user.photoURL)
                console.log(user)
            })

            .catch(error => {
                console.log(error);
            })
    }
}