import { ADD_PRODUCT_TO_COMPARISONS, ADD_PRODUCT_TO_WISHLIST, REMOVE_ALL_PRODUCTS_FROM_COMPARISONS, REMOVE_ALL_PRODUCTS_FROM_WISHLIST, REMOVE_PRODUCT_FROM_COMPARISONS, REMOVE_PRODUCT_FROM_WISHLIST } from "../ActionTypes"

export const addProductToComparisons = (product) => {
    return{
        type: ADD_PRODUCT_TO_COMPARISONS,
        payload: product,
    }
}

export const removeProductFromComparisons = (productID) => {
    return{
        type: REMOVE_PRODUCT_FROM_COMPARISONS,
        payload: productID,
    }
}
export const removeAllProductsFromComparisons = () => {
    return{
        type: REMOVE_ALL_PRODUCTS_FROM_COMPARISONS,
    }
}




export const addProductToWishlist = (product) => {
    return{
        type: ADD_PRODUCT_TO_WISHLIST,
        payload: product,
    }
}

export const removeProductFromWishlist = (productID) => {
    return{
        type: REMOVE_PRODUCT_FROM_WISHLIST,
        payload: productID,
    }
}
export const removeAllProductsFromWishlist = () => {
    return{ 
        type: REMOVE_ALL_PRODUCTS_FROM_WISHLIST
    }
}