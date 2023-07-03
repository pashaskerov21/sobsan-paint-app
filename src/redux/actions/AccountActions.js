import { DELETE_ACTIVE_PROFILE, LOG_OUT_ACTIVE_PROFILE, OPEN_ACTIVE_USER_ACCOUNT, SAVE_USER_DATA, UPDATE_ACTIVE_PROFILE_DATA, UPDATE_USERS_DATA } from "../ActionTypes"

export const saveUserAccountData = (data) => {
    return{
        type: SAVE_USER_DATA,
        payload: data
    }
}
export const updateUsersData = (data) => {
    return{
        type: UPDATE_USERS_DATA,
        payload: data
    }
}

export const openActiveUserAccount = (data) => {
    return{
        type: OPEN_ACTIVE_USER_ACCOUNT,
        payload: data
    }
}

export const updateActiveUserAccount = (data) => {
    return{
        type: UPDATE_ACTIVE_PROFILE_DATA,
        payload: data,
    }
}
export const deleteActiveProfile = (userID) => {
    return{
        type: DELETE_ACTIVE_PROFILE,
        payload: userID,
    }
}
export const logOutActiveProfile = () => {
    return {
        type: LOG_OUT_ACTIVE_PROFILE,
    }
}

