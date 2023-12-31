import { ADD_PRODUCT_TO_BASKET, ADD_PRODUCT_TO_COMPARISONS, ADD_PRODUCT_TO_WISHLIST, DECREASE_BASKET_PRODUCT_AMOUNT, INCREASE_BASKET_PRODUCT_AMOUNT, REMOVE_ALL_PRODUCTS_FROM_BASKET, REMOVE_ALL_PRODUCTS_FROM_COMPARISONS, REMOVE_ALL_PRODUCTS_FROM_WISHLIST, REMOVE_PRODUCT_FROM_BASKET, REMOVE_PRODUCT_FROM_COMPARISONS, REMOVE_PRODUCT_FROM_WISHLIST, SEARCH_PRODUCTS, SEND_BASKET_TOTAL, SET_BASKET_PRODUCT_AMOUNT, UPDATE_BASKET_PRODUCTS, UPDATE_COMPARE_PRODUCTS, UPDATE_WISHLIST_PRODUCTS } from "../ActionTypes"

// comparisons
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
export const updateCompareProducts = (products) => {
    return{
        type: UPDATE_COMPARE_PRODUCTS,
        payload: products
    }
}

// wishlist
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
export const updateWishlistProducts = (products) => {
    return{
        type: UPDATE_WISHLIST_PRODUCTS,
        payload: products
    }
}


// basket
export const addProductToBasket = (product) => {
    return{
        type: ADD_PRODUCT_TO_BASKET,
        payload: product
    }
}
export const removeProductFromBasket = (productID) => {
    return{
        type: REMOVE_PRODUCT_FROM_BASKET,
        payload: productID
    }
}
export const removeAllProductsFromBasket = () => {
    return{
        type: REMOVE_ALL_PRODUCTS_FROM_BASKET
    }
}
export const updateBasketProducts = (basketProducts) => {
    return{
        type: UPDATE_BASKET_PRODUCTS,
        payload: basketProducts
    }
}


export const increaseBasketProductAmount = (basketID) => {
    return{
        type: INCREASE_BASKET_PRODUCT_AMOUNT,
        payload: basketID
    }
}
export const decreaseBasketProductAmount = (basketID) => {
    return{
        type: DECREASE_BASKET_PRODUCT_AMOUNT,
        payload: basketID
    }
}

export const setBasketProductAmount = (amountArray) => {
    return{
        type: SET_BASKET_PRODUCT_AMOUNT,
        payload: amountArray
    }
}


export const sendBasketTotal = (total) => {
    return{
        type: SEND_BASKET_TOTAL,
        payload: total
    }
}

export const sendSearchProducts = (products) => {
    return{
        type: SEARCH_PRODUCTS,
        payload: products,
    }
}