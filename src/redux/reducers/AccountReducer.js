import { OPEN_ACTIVE_USER_ACCOUNT, SAVE_USER_DATA } from "../ActionTypes"

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
        case OPEN_ACTIVE_USER_ACCOUNT:
            return{
                ...state,
                activeUserAccount: action.payload,
            }
        default:
            return state;
    }
}

export default AccountReducer