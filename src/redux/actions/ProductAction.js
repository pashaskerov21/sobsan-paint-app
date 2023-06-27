import { ADD_COMPARISONS, ADD_WISHLIST, REMOVE_COMPARISONS, REMOVE_WISHLIST } from "../ActionTypes"

export const addToComparisons = (product) => {
    return{
        type: ADD_COMPARISONS,
        payload: product,
    }
}

export const removeToComparisons = (productID) => {
    return{
        type: REMOVE_COMPARISONS,
        payload: productID,
    }
}


export const addToWishlist = (product) => {
    return{
        type: ADD_WISHLIST,
        payload: product,
    }
}

export const removeToWishlist = (productID) => {
    return{
        type: REMOVE_WISHLIST,
        payload: productID,
    }
}