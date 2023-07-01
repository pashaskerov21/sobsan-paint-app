import { DELETE_ACTIVE_PROFILE, LOG_OUT_ACTIVE_PROFILE, OPEN_ACTIVE_USER_ACCOUNT, SAVE_USER_BASKET_PRODUCTS, SAVE_USER_COMPARE_PRODUCTS, SAVE_USER_DATA, SAVE_USER_WISHLIST_PRODUCTS, UPDATE_ACTIVE_PROFILE_DATA } from "../ActionTypes"

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

export const saveUserBasketProducts = (products) => {
    return{
        type: SAVE_USER_BASKET_PRODUCTS,
        payload: products,
    }
}

export const saveUserWishlistProducts = (products) => {
    return{
        type: SAVE_USER_WISHLIST_PRODUCTS,
        payload: products,
    }
}
export const saveUserCompareProducts = (products) => {
    return{
        type: SAVE_USER_COMPARE_PRODUCTS,
        payload: products,
    }
}

export const deleteUserBasketProducts = () => {
    return{
        type: SAVE_USER_BASKET_PRODUCTS,
    }
}
export const deleteUserWishlistProducts = () => {
    return{
        type: SAVE_USER_BASKET_PRODUCTS,
    }
}
export const deleteUserCompareProducst = () => {
    return{
        type: SAVE_USER_BASKET_PRODUCTS,
    }
}