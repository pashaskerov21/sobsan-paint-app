import { DELETE_ACTIVE_PROFILE, LOG_OUT_ACTIVE_PROFILE, OPEN_ACTIVE_USER_ACCOUNT, SAVE_USER_DATA, UPDATE_ACTIVE_PROFILE_DATA, UPDATE_USERS_DATA } from "../ActionTypes"

const initialState = {
    userAccounts: [],
    activeUserAccount: undefined,
}


const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                userAccounts: [...state.userAccounts, action.payload]
            }
        case UPDATE_USERS_DATA:
            return {
                ...state,
                userAccounts: [...action.payload]
            }
        case OPEN_ACTIVE_USER_ACCOUNT:
            return {
                ...state,
                activeUserAccount: action.payload,
            }
        case UPDATE_ACTIVE_PROFILE_DATA:
            return {
                ...state,
                activeUserAccount: action.payload
            }
        case LOG_OUT_ACTIVE_PROFILE:
            return {
                ...state,
                activeUserAccount: undefined
            }
        case DELETE_ACTIVE_PROFILE:
            return {
                ...state,
                userAccounts: [...state.userAccounts.filter((user) => user.userID !== action.payload)]
            }
        default:
            return state;
    }
}

export default AccountReducer