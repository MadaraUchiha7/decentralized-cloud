import auth from "../../firebase"
import firebase from "firebase/compat/app"
import {
    LOAD_PROFILE,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOG_OUT,
 } from '../actionTypes'

 const login = () => async dispatch =>{
    try {
        dispatch({
            type: LOGIN_REQUEST,
        })
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken
        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }
        sessionStorage.setItem("decentralized-token", accessToken)
        sessionStorage.setItem("decentralized-user", JSON.stringify(profile))

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
        })
        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
}
export const log_out = () => async dispatch => {
    await auth.signOut()
    dispatch({
       type: LOG_OUT,
    })
 
    sessionStorage.removeItem('decentralized-token')
    sessionStorage.removeItem('decentralized-user')
 }
export default login