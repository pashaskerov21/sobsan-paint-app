import { DELETE_ACTIVE_PROFILE, LOG_OUT_ACTIVE_PROFILE, OPEN_ACTIVE_USER_ACCOUNT, SAVE_USER_BASKET_PRODUCTS, SAVE_USER_COMPARE_PRODUCTS, SAVE_USER_DATA, SAVE_USER_WISHLIST_PRODUCTS, UPDATE_ACTIVE_PROFILE_DATA } from "../ActionTypes"

const initialState = {
    userAccounts: [],
    activeUserAccount: undefined,
    userBasketProducts: [],
    userWishlistProducts: [],
    userCompareProducts: [],
}


const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                userAccounts: [...state.userAccounts, action.payload]
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
        case SAVE_USER_BASKET_PRODUCTS:
            return {
                ...state,
                userBasketProducts: [...action.payload]
            }
        case SAVE_USER_WISHLIST_PRODUCTS:
            return {
                ...state,
                userWishlistProducts: [...action.payload]
            }
        case SAVE_USER_COMPARE_PRODUCTS:
            return {
                ...state,
                userCompareProducts: [...action.payload]
            }
        default:
            return state;
    }
}

export default AccountReducer