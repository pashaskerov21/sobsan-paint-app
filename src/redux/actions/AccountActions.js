import { OPEN_ACTIVE_USER_ACCOUNT, SAVE_USER_DATA } from "../ActionTypes"

export const saveUserAccountData = (data) => {
    return{
        type: SAVE_USER_DATA,
        payload: data
    }
}

export const openActiveUserAccount = (data) => {
    return{
        type: OPEN_ACTIVE_USER_ACCOUNT,
        payload: data
    }
}